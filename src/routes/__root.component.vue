<script setup lang="ts">
import { Link, Outlet, HeadContent, Html, Body, Scripts } from '@tanstack/vue-router'
import { mdiHome, mdiLogin, mdiViewDashboard } from '@mdi/js'
</script>

<template>
  <Html>
    <head>
      <HeadContent />
    </head>
    <Body>
      <nav class="dk-nav">
        <Link class="dk-nav__link" to="/">
          <svg class="dk-icon" viewBox="0 0 24 24" width="16" height="16">
            <path :d="mdiHome" fill="currentColor" />
          </svg>
          Home
        </Link>
        <Link class="dk-nav__link" to="/login">
          <svg class="dk-icon" viewBox="0 0 24 24" width="16" height="16">
            <path :d="mdiLogin" fill="currentColor" />
          </svg>
          Login
        </Link>
        <Link class="dk-nav__link" to="/dashboard">
          <svg class="dk-icon" viewBox="0 0 24 24" width="16" height="16">
            <path :d="mdiViewDashboard" fill="currentColor" />
          </svg>
          Dashboard
        </Link>
      </nav>
      <hr/>
      <Outlet />
      <Scripts />
    </Body>
  </Html>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--v0-theme-background);
    color: var(--v0-theme-text);
  }

  .dk-nav {
    display: flex;
    gap: 1rem;
    padding: 0.75rem 1.5rem;
    background: var(--v0-theme-surface);
    border-bottom: 1px solid var(--v0-theme-border);
  }

  .dk-icon {
    display: inline-block;
    vertical-align: middle;
  }

  .dk-nav__link {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    background: none;
    border: none;
    color: var(--v0-theme-muted);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease;
    text-decoration: none;
  }

  .dk-nav__link:hover {
    color: var(--v0-theme-text);
  }

  .dk-nav__link.active {
    color: var(--v0-theme-primary);
  }
</style>
