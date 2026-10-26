import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DevPortfolio from './DevPortfolio';
import { FeaturedProduct, PortfolioData } from './PortfolioData';

const renderPage = () => render(<MemoryRouter><DevPortfolio /></MemoryRouter>);

it('shows Tiler as the featured product, above the project list', () => {
  const { container } = renderPage();
  const headings = [...container.querySelectorAll('h2')].map(h => h.textContent);
  expect(headings[0]).toBe(`${FeaturedProduct.title}${FeaturedProduct.tagline}`);
  expect(headings.slice(1)).toEqual(PortfolioData.map(p => p.title));
  const hrefs = [...container.querySelectorAll('a')].map(a => a.getAttribute('href'));
  expect(hrefs).toContain('https://tiler.app');
});

it('keeps the CTO role in the past tense', () => {
  expect(FeaturedProduct.description.join(' ')).toMatch(/As co-founder and CTO, I helped/);
});
