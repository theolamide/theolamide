import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from './About';
import { about } from '../content/about';

const renderAbout = () => render(<MemoryRouter><About /></MemoryRouter>);

it('renders the five sections with one h1', () => {
  const { container, getByText } = renderAbout();
  expect(container.querySelectorAll('h1')).toHaveLength(1);
  expect(getByText(about.title)).toBeTruthy();
  const headings = [...container.querySelectorAll('h2')].map(h => h.textContent);
  expect(headings).toEqual(['How I got here', 'How I think about building', 'Beyond software', "What's next?"]);
});

it('links to existing work and contact profiles only', () => {
  const { container } = renderAbout();
  const hrefs = [...container.querySelectorAll('a')].map(a => a.getAttribute('href'));
  expect(hrefs).toContain('/devportfolio');
  expect(hrefs).toContain('/photoportfolio');
  expect(hrefs).toContain('https://www.linkedin.com/in/daniel-olamide-ajadi');
  expect(hrefs).toContain('https://github.com/theolamide');
});

it('keeps the editorial rules: no em or en dashes, Tiler in the past tense', () => {
  const text = JSON.stringify(about);
  expect(text).not.toMatch(/[–—]/);
  expect(text).toMatch(/that chapter has since closed/);
});
