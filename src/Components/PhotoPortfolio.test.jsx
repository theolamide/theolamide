import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PhotoPortfolio from './PhotoPortfolio';
import { CookingRoll } from './PortfolioData';

const renderAt = (entry) => {
  let location;
  const utils = render(
    <MemoryRouter initialEntries={[entry]}>
      <PhotoPortfolio />
      <Route path="*" render={(props) => { location = props.location; return null; }} />
    </MemoryRouter>
  );
  return { ...utils, location: () => location };
};

const shownPhoto = (container) => container.querySelector('section img:not([alt=""])');

it('opens on the portraits, and switches to home cooking', () => {
  const { container, getByText, location } = renderAt('/photoportfolio');
  const portraits = getByText('Portraits').closest('button');
  const cooking = getByText('Home cooking').closest('button');
  expect(portraits.getAttribute('aria-pressed')).toBe('true');
  expect(shownPhoto(container).getAttribute('alt')).toBe('Fresh Prince');

  fireEvent.click(cooking);
  expect(cooking.getAttribute('aria-pressed')).toBe('true');
  expect(shownPhoto(container).getAttribute('alt')).toBe('Jollof rice with lamb chop');
  expect(location().hash).toBe('#cooking');
  expect(container.querySelector('a[href="https://www.instagram.com/lami.madeit/"]')).toBeTruthy();
});

it('opens straight on home cooking from #cooking', () => {
  const { container, getByText } = renderAt('/photoportfolio#cooking');
  expect(getByText('Home cooking').closest('button').getAttribute('aria-pressed')).toBe('true');
  expect(shownPhoto(container).getAttribute('alt')).toBe('Jollof rice with lamb chop');
  expect(getByText(`1 / ${CookingRoll.length}`)).toBeTruthy();
});

it('every cooking photo has a full-size file and a thumbnail', () => {
  expect(CookingRoll).toHaveLength(17);
  CookingRoll.forEach(photo => {
    expect(photo.src).toBeTruthy();
    expect(photo.thumb).toBeTruthy();
  });
});
