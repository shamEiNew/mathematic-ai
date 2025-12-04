
import React from 'react';

const App = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-serif">
      {/* Header */}
      <header className="border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <a href="/" className="text-4xl font-bold font-sans hover:text-gray-300 transition-colors duration-300">
            Mathematics & AI
          </a>
          <p className="text-gray-400 mt-1">Exploring the frontier of automated discovery.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          <h1 className="text-3xl font-bold font-sans border-b border-gray-700 pb-4">Latest Articles</h1>

          <Article
            title="Working with Existential Quantifiers, Universal Quantifiers, and Classical Reasoning in Lean"
            href="posts/quantifiers-and-classical-logic-in-lean.html"
            date="November 27, 2025"
            author="Sham"
            tags={['Prop', 'Lean4']}
            summary="A comprehensive collection of Lean 4 examples covering existential and universal quantifiers, and the interplay between constructive and classical reasoning."
          />

          <Article
            title="Existential Quantifier"
            href="posts/existential-quantification-in-lean.html"
            date="November 25, 2025"
            author="Sham"
            tags={['lean4', 'proof']}
            summary="A look at proving existential statements in Lean 4 with calculation blocks."
          />

          <Article
            title="Basic Logic Proofs in Lean 4"
            href="posts/basic-logic-proofs-in-lean.html"
            date="November 20, 2025"
            author="Sham"
            tags={['lean4', 'logic', 'mathlib']}
            summary="A collection of essential propositional logic proofs in Lean 4 covering Currying, De Morgan's Laws, and more."
          />

          <Article
            title="Proving the Distributive Law in Lean"
            href="posts/distributive-law-in-lean.html"
            date="November 15, 2025"
            author="Sham"
            tags={[]}
            summary="A deep dive into formal verification using Lean 4 examining the distributive property of logic."
          />

          <Article
            title="The Power of Abstraction: Universal Properties"
            href="posts/universal-properties-in-category-theory.html"
            date="November 10, 2025"
            author="Gemini"
            tags={[]}
            summary="Discover how universal properties in category theory allow mathematicians to define complex structures through their relationships."
          />

          <Article
            title="Mathematical Exploration and Discovery at Scale"
            href="posts/mathematical-exploration-and-discovery-at-scale.html"
            date="November 3, 2025"
            author="Summary"
            tags={[]}
            summary="A look at AlphaEvolve, an AI agent that combines large language models with evolutionary search to autonomously discover new mathematical constructions."
          />

          <Article
            title="AlphaGeometry2, DDAR AND SKEST"
            href="posts/alphageometry2.html"
            date="May 27, 2025"
            author="Sham"
            tags={['Explore']}
            summary="An overview of AlphaGeometry2 (AG2), a significant advancement in AI for solving complex geometry problems, achieving gold-medalist level performance at the IMO using Neuro-Symbolic systems."
          />

          <Article
            title="Beam Search"
            href="posts/beam-search.html"
            date="May 27, 2025"
            author="Sham"
            tags={['AI', 'Algorithms']}
            summary="Understanding Beam Search: A heuristic approach to sequence generation used in modern AI systems like AlphaGeometry for proof search."
          />

          <Article
            title="Second-order Clipped Stochastic Optimization (SOPHIA)"
            href="posts/sophia.html"
            date="June 9, 2023"
            author="Sham"
            tags={['Explore']}
            summary="A look at Sophia, a second-order clipped optimizer that claims to make training LLMs less expensive compared to Adam."
          />

          <Article
            title="Factoring Finite Factor Rings with SageMath"
            href="posts/factoring-rings-sagemath.html"
            date="June 5, 2022"
            author="Sham"
            tags={['Algebra', 'Code']}
            summary="Exploring the group of units for commutative rings of the form F[x]/(h(x)) using SageMath algorithms."
          />

          <Article
            title="Euler's Totient Function"
            href="posts/eulers-totient.html"
            date="May 22, 2022"
            author="Sham"
            tags={['Number Theory', 'C++']}
            summary="An introduction to Euler's Totient Function, its properties, theorems, and computational implementation."
          />

          <Article
            title="Prime Sieves: Sieve of Eratosthenes"
            href="posts/prime-sieves.html"
            date="September 6, 2020"
            author="Sham"
            tags={['Code', 'Primes']}
            summary="Writing a series on different sieve methods for extracting primes, starting with the classic Sieve of Eratosthenes in Python."
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500">
          <p>&copy; {currentYear} Mathematics & AI. All rights reserved.</p>
          <p className="text-sm mt-1">Blog page built by Gemini</p>
        </div>
      </footer>
    </div>
  );
};

interface ArticleProps {
  title: string;
  href: string;
  date: string;
  author: string;
  tags: string[];
  summary: string;
}

const Article: React.FC<ArticleProps> = ({ title, href, date, author, tags, summary }) => {
  return (
    <article className="group">
      <a href={href}>
        <h2 className="text-2xl font-bold font-sans text-gray-100 group-hover:text-white transition-colors duration-300">
          {title}
        </h2>
      </a>
      <div className="text-sm text-gray-400 mt-2 flex flex-wrap items-center gap-2">
        <span>{date}</span> &bull; <span>By {author}</span>
        {tags.map((tag) => (
          <span key={tag} className="text-xs border border-gray-700 rounded px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-4 text-gray-300 leading-relaxed">
        {summary}
      </p>
      <a href={href} className="text-white font-bold inline-block mt-4 group-hover:underline">
        Read more &rarr;
      </a>
    </article>
  );
};

export default App;