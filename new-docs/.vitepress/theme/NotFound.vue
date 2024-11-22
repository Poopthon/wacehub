<template>
    <div class="not-found">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, we couldn't find the page you were looking for.</p>
        <router-link to="/">Go back to Home</router-link>
    </div>
</template>

<style>
.not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa;
    color: #333;
    font-family: Arial, sans-serif;
}

.not-found h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.not-found p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.not-found a {
    font-size: 1.2rem;
    color: #007bff;
    text-decoration: none;
}

.not-found a:hover {
    text-decoration: underline;
}
</style>
