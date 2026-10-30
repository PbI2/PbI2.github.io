---
layout: post
title: "Cantor's diagonal argument: a list that can never be complete"
date: 2024-10-30 09:00:00 +0800
category: "Courses / Discrete mathematics"
excerpt: "A gentle introduction to Cantor's diagonal argument, the proof that some infinities are strictly larger than others."
hero_color: yellow
hero_mark: "ℵ"
published: true
---

Imagine that someone claims to have written down **every** infinite binary sequence. Each sequence is an endless row of zeros and ones:

$$
010101\ldots,\qquad 111000\ldots,\qquad 001011\ldots
$$

Could we check whether the list is truly complete? Georg Cantor's diagonal argument gives a surprisingly short answer: **no list can contain every infinite binary sequence**.

## Start with the strongest possible list

Suppose the list is

$$
\begin{array}{c|cccccc}
 & 1 & 2 & 3 & 4 & 5 & \cdots \\ \hline
S_1 & 0 & 1 & 0 & 1 & 0 & \cdots \\
S_2 & 1 & 1 & 1 & 0 & 0 & \cdots \\
S_3 & 0 & 0 & 1 & 0 & 1 & \cdots \\
S_4 & 1 & 0 & 0 & 1 & 1 & \cdots \\
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots &
\end{array}
$$

The row $S_n$ is the $n$th sequence, and the $n$th column records its $n$th digit. The list might be unimaginably long, but assume it includes every sequence.

## Build a sequence that escapes

Now construct a new sequence $T$ by looking only at the diagonal:

$$
T_n =
\begin{cases}
1, & \text{if the } n\text{th digit of } S_n \text{ is } 0,\\
0, & \text{if the } n\text{th digit of } S_n \text{ is } 1.
\end{cases}
$$

In words, $T$ is obtained by flipping the diagonal digits:

$$
T = (1-S_1(1))(1-S_2(2))(1-S_3(3))\cdots.
$$

The new sequence differs from $S_1$ in the first position, from $S_2$ in the second position, from $S_3$ in the third position, and so on. Therefore

$$
T \neq S_n \qquad \text{for every } n \in \mathbb{N}.
$$

But $T$ is still a perfectly valid infinite binary sequence. It should have appeared somewhere in the list if the list were complete. This contradiction proves that no enumeration of all infinite binary sequences exists.

> The diagonal is not a place to search for the missing object. It is a recipe for constructing one.

## What this says about real numbers

Every infinite binary sequence can be interpreted as a binary expansion of a real number in $[0,1]$:

$$
0.b_1b_2b_3\ldots{}_2
= \sum_{n=1}^{\infty}\frac{b_n}{2^n}.
$$

There is a small technical detail: some real numbers have two binary expansions, such as $0.1000\ldots_2 = 0.0111\ldots_2$. We can avoid this by choosing a representation that does not eventually consist entirely of $1$s. The diagonal construction still produces a number outside any proposed list.

Thus the real numbers in $[0,1]$ are **uncountable**. The natural numbers

$$
\mathbb{N} = \{1,2,3,\ldots\}
$$

are countable, but the real numbers are not. In particular, there are strictly more real numbers than natural numbers:

$$
|\mathbb{N}| < |\mathbb{R}|.
$$

## Why the argument matters

Cantor's proof is more than a clever trick. It teaches a general method:

1. Assume a proposed list is complete.
2. Read the list in a structured way.
3. Use the list itself to construct an object that differs from entry $n$ at a chosen position $n$.
4. Conclude that the original list was never complete.

The same pattern appears in logic, computer science, and the theory of computation. Whenever a system claims to capture every object of a certain kind, diagonalization asks whether the system can construct an object that escapes its own description.

The most beautiful part is also the simplest: to defeat an infinite list, we do not need to inspect every row. We only need one carefully chosen entry from each row.
