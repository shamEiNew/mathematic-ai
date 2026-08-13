// Single source of truth for every post on the site.
// To publish a new post: copy templates/post-template.html into posts/,
// fill it in, then add one entry here. index.html renders the list from
// this file automatically — nothing else needs to change.
//
// date: "YYYY-MM-DD" (used for sorting, not displayed)
// dateDisplay: human-readable date shown on the card and post page

window.POSTS = [
    {
        url: "posts/contraction-mapping-theorem.html",
        title: "Contraction Mapping Theorem",
        date: "2026-08-13",
        dateDisplay: "August 13, 2026",
        author: "Sham",
        tags: ["Functional Analysis", "Fixed Point Theorem", "Banach Spaces"],
        description: "The continuous version of the contraction mapping theorem, notes on bounded operators, and four worked problems on l^p spaces, Banach series, invertibility, and Fréchet differentiability."
    },
    {
        url: "posts/quantifiers-and-classical-logic-in-lean.html",
        title: "Working with Existential Quantifiers, Universal Quantifiers, and Classical Reasoning in Lean",
        date: "2025-11-27",
        dateDisplay: "November 27, 2025",
        author: "Sham",
        tags: ["Prop", "Lean4", "TPiL4", "propositional-logic"],
        description: "A comprehensive collection of Lean 4 examples covering existential and universal quantifiers, and the interplay between constructive and classical reasoning."
    },
    {
        url: "posts/existential-quantification-in-lean.html",
        title: "Existential Quantifier",
        date: "2025-11-25",
        dateDisplay: "November 25, 2025",
        author: "Sham",
        tags: ["lean4", "proof"],
        description: "A look at proving existential statements in Lean 4 with calculation blocks."
    },
    {
        url: "posts/basic-logic-proofs-in-lean.html",
        title: "Basic Logic Proofs in Lean 4",
        date: "2025-11-20",
        dateDisplay: "November 20, 2025",
        author: "Sham",
        tags: ["lean4", "mathlib", "logic"],
        description: "Elementary proofs in Lean 4 covering implication, conjunction, disjunction, and negation, including De Morgan's laws and the contrapositive."
    },
    {
        url: "posts/distributive-law-in-lean.html",
        title: "Distributive Law of Propositional Logic in Lean",
        date: "2025-11-15",
        dateDisplay: "November 15, 2025",
        author: "Sham",
        tags: ["lean4", "proof"],
        description: "example : p ∨ (q ∧ r) ↔ (p ∨ q) ∧ (p ∨ r) := by sorry"
    },
    {
        url: "posts/universal-properties-in-category-theory.html",
        title: "The Power of Abstraction: Understanding Universal Properties in Category Theory",
        date: "2025-11-10",
        dateDisplay: "November 10, 2025",
        author: "Sham",
        tags: ["Category Theory"],
        description: "Category theory studies abstract structures through the relationships between them rather than their internal elements — an introduction to the universal property."
    },
    {
        url: "posts/mathematical-exploration-and-discovery-at-scale.html",
        title: "Mathematical Exploration and Discovery at Scale: A Look at AlphaEvolve",
        date: "2025-11-03",
        dateDisplay: "November 3, 2025",
        author: "Summary",
        tags: ["AI", "AlphaEvolve"],
        description: "A summary of AlphaEvolve, an evolutionary coding agent that blends large language models with automated evaluation to drive mathematical research."
    },
    {
        url: "posts/2023-03-30-the-bow-tie-space.html",
        title: "The Bow-Tie Space",
        date: "2023-03-30",
        dateDisplay: "March 30, 2023",
        author: "Explore",
        tags: ["Topology"],
        description: "The bow-tie topological space: a non-Hausdorff example built from two copies of the real line glued at a point."
    },
    {
        url: "posts/2020-05-30-completion-of-real-numbers-and-polynomial-space.html",
        title: "Completion of the Reals and Polynomial Space",
        date: "2020-05-30",
        dateDisplay: "May 30, 2020",
        author: "Sham",
        tags: ["Analysis", "Topology"],
        description: "Cauchy completions, the construction of the real numbers from the rationals, and the completion of polynomial space leading to the Stone–Weierstrass theorem."
    },
    {
        url: "posts/2019-07-11-arzela-ascoli-theorem.html",
        title: "Arzelà-Ascoli Theorem",
        date: "2019-07-11",
        dateDisplay: "July 11, 2019",
        author: "Sham",
        tags: ["Functional Analysis"],
        description: "Scanned notes on the statement and proof of the Arzelà–Ascoli theorem."
    },
    {
        url: "posts/2019-07-11-p-groups.html",
        title: "p-Groups",
        date: "2019-07-11",
        dateDisplay: "July 11, 2019",
        author: "Sham",
        tags: ["Group Theory"],
        description: "Scanned lecture notes on p-groups."
    },
    {
        url: "posts/2019-07-10-cauchys-theorem-mckay-proof.html",
        title: "Cauchy's Theorem (McKay Proof)",
        date: "2019-07-10",
        dateDisplay: "July 10, 2019",
        author: "Sham",
        tags: ["Group Theory"],
        description: "Scanned notes on the McKay proof of Cauchy's theorem, as it appeared in the American Mathematical Monthly, 1959."
    },
    {
        url: "posts/2019-07-10-elements-in-orbit-is-index-of-stabilizer.html",
        title: "Elements in an Orbit is the Index of the Stabilizer",
        date: "2019-07-10",
        dateDisplay: "July 10, 2019",
        author: "Sham",
        tags: ["Group Theory"],
        description: "A short note and scan illustrating the orbit-stabilizer relation."
    },
    {
        url: "posts/2019-07-09-1985-b5.html",
        title: "1985 Putnam B5",
        date: "2019-07-09",
        dateDisplay: "July 09, 2019",
        author: "Sham",
        tags: ["Putnam"],
        description: "Scanned solution to Putnam 1985 problem B5."
    },
    {
        url: "posts/2019-07-09-c01-is-not-complete-with-integral-metric.html",
        title: "C[0,1] is not Complete with the L¹ Metric",
        date: "2019-07-09",
        dateDisplay: "July 09, 2019",
        author: "Sham",
        tags: ["Completeness"],
        description: "Scanned notes showing an example and argument that C[0,1] is not complete under the L¹ metric."
    },
    {
        url: "posts/2019-07-08-finite-subgroups-of-glnz-are-finite.html",
        title: "Finite Subgroups of GL(n,Z) are Finite",
        date: "2019-07-08",
        dateDisplay: "July 08, 2019",
        author: "Sham",
        tags: ["Group Theory"],
        description: "Scanned notes on a Minkowski-based argument for why finite subgroups of GL(n,Z) are finite."
    },
    {
        url: "posts/2018-04-12-algebraic-closure-of-a-field.html",
        title: "Algebraic Closure of a Field",
        date: "2018-04-12",
        dateDisplay: "April 12, 2018",
        author: "Sham",
        tags: ["Field Theory"],
        description: "Notes on the existence of algebraic closures via polynomial rings and Zorn's lemma."
    }
];
