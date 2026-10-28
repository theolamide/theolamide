import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PhotoGallery from './PhotoGallery';
import { PhotoRoll } from './PortfolioData';

const photos = [
  { src: '/a.jpg', thumb: '/a-thumb.jpg', caption: 'First' },
  { src: '/b.jpg', thumb: '/b-thumb.jpg', caption: 'Second' },
  { src: '/c.jpg', thumb: '/c-thumb.jpg', caption: 'Third' },
];

const shownPhoto = (container) => container.querySelector('img:not([alt=""])');

it('every photo on the page has a full-size file and a thumbnail', () => {
  expect(PhotoRoll).toHaveLength(25);
  PhotoRoll.forEach(photo => {
    expect(photo.src).toBeTruthy();
    expect(photo.thumb).toBeTruthy();
  });
});

it('moves with the arrow buttons and wraps around both ends', () => {
  const { container, getByLabelText, getByText } = render(<PhotoGallery photos={photos} label="Test" />);
  expect(shownPhoto(container).getAttribute('src')).toBe('/a.jpg');
  expect(getByText('1 / 3')).toBeTruthy();

  fireEvent.click(getByLabelText('Previous photo'));
  expect(shownPhoto(container).getAttribute('alt')).toBe('Third');

  fireEvent.click(getByLabelText('Next photo'));
  fireEvent.click(getByLabelText('Next photo'));
  expect(shownPhoto(container).getAttribute('alt')).toBe('Second');
});

it('jumps to a photo from its thumbnail and marks it current', () => {
  const { container, getByLabelText } = render(<PhotoGallery photos={photos} label="Test" />);
  const thumb = getByLabelText('Show photo 3: Third');
  fireEvent.click(thumb);
  expect(shownPhoto(container).getAttribute('src')).toBe('/c.jpg');
  expect(thumb.getAttribute('aria-current')).toBe('true');
  expect(getByLabelText('Show photo 1: First').getAttribute('aria-current')).toBeNull();
});

it('responds to the keyboard arrow keys and to swipes', () => {
  const { container } = render(<PhotoGallery photos={photos} label="Test" />);
  const gallery = container.querySelector('section');

  fireEvent.keyDown(gallery, { key: 'ArrowRight' });
  expect(shownPhoto(container).getAttribute('alt')).toBe('Second');

  const stage = shownPhoto(container).parentElement;
  fireEvent.touchStart(stage, { touches: [{ clientX: 200 }] });
  fireEvent.touchEnd(stage, { changedTouches: [{ clientX: 100 }] });
  expect(shownPhoto(container).getAttribute('alt')).toBe('Third');
});
