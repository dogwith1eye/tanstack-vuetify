<script setup lang="ts">
import { Link, Outlet, HeadContent, Html, Body, Scripts } from '@tanstack/vue-router'
import { mdiHome, mdiLogin, mdiViewDashboard } from '@mdi/js'
import { registerPlugins } from '@/plugins'

</script>

<template>
  <Html>
    <head>
      <HeadContent />
    </head>
    <Body>
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
      <hr/>
      <Outlet />
      <Scripts />
    </Body>
  </Html>
</template>