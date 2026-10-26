import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DevPortfolio from './DevPortfolio';
import { FeaturedProducts, PortfolioData } from './PortfolioData';

const renderPage = () => render(<MemoryRouter><DevPortfolio /></MemoryRouter>);

it('shows Tiler and Wodu as featured products, above the project list', () => {
  const { container } = renderPage();
  const headings = [...container.querySelectorAll('h2')].map(h => h.textContent);
  expect(headings.slice(0, 2)).toEqual(FeaturedProducts.map(p => `${p.title}${p.tagline}`));
  expect(headings.slice(2)).toEqual(PortfolioData.map(p => p.title));
  const hrefs = [...container.querySelectorAll('a')].map(a => a.getAttribute('href'));
  expect(hrefs).toContain('https://tiler.app');
  expect(hrefs).toContain('https://wodu.app');
});

it('keeps the CTO role in the past tense', () => {
  const tiler = FeaturedProducts.find(p => p.id === 'tiler');
  expect(tiler.description.join(' ')).toMatch(/As co-founder and CTO, I helped/);
});
