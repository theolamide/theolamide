import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SiteHeader from './SiteHeader';

const renderHeader = () => render(<MemoryRouter><SiteHeader /></MemoryRouter>);

it('links to the three sections, with About as the home page', () => {
  const { getAllByText } = renderHeader();
  expect(getAllByText('About me')[0].getAttribute('href')).toBe('/');
  expect(getAllByText('Software work')[0].getAttribute('href')).toBe('/devportfolio');
  expect(getAllByText('Photography')[0].getAttribute('href')).toBe('/photoportfolio');
});

it('opens the side menu, and closes it with Escape or the close button', () => {
  const { getByLabelText, getByRole } = renderHeader();
  const panel = getByRole('dialog', { hidden: true });
  const openButton = getByLabelText('Open menu');
  expect(panel.getAttribute('data-open')).toBe('false');

  fireEvent.click(openButton);
  expect(panel.getAttribute('data-open')).toBe('true');
  expect(openButton.getAttribute('aria-expanded')).toBe('true');

  fireEvent.keyDown(document, { key: 'Escape' });
  expect(panel.getAttribute('data-open')).toBe('false');
  expect(document.activeElement).toBe(openButton);

  fireEvent.click(openButton);
  fireEvent.click(getByLabelText('Close menu'));
  expect(panel.getAttribute('data-open')).toBe('false');
});
