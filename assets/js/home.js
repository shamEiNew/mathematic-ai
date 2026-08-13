// Renders the homepage article list from window.POSTS (assets/js/posts-data.js).
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('post-list');
    if (!container || !window.POSTS) return;

    const posts = [...window.POSTS].sort((a, b) => b.date.localeCompare(a.date));

    container.innerHTML = posts.map(post => `
        <article class="post-card group">
            <a href="${post.url}">
                <h2 class="text-2xl font-bold font-sans text-stone-900 group-hover:text-stone-900 transition-colors duration-300">
                    ${post.title}
                </h2>
            </a>
            <div class="text-sm text-stone-700 mt-2 flex flex-wrap items-center gap-2">
                <span>${post.dateDisplay}</span> &bull; <span>By ${post.author}</span>
                ${post.tags.map(tag => `<span class="post-tag text-stone-700">${tag}</span>`).join('')}
            </div>
            <p class="mt-4 text-stone-700 leading-relaxed">
                ${post.description}
            </p>
            <a href="${post.url}" class="text-stone-900 font-bold inline-block mt-4 group-hover:underline">
                Read more &rarr;
            </a>
        </article>
    `).join('');
});
