import { NuxtLink } from '../.nuxt/components';
<template>
  <div>
    <div class="relative">
      <div class="navbar bg-base-100 z-10 fixed top-0">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NuxtLink to="/" class="btn nav capitalize">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/stories" class="btn nav capitalize"
                  >Stories</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/showcase" class="btn nav capitalize"
                  >Showcase</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/about" class="btn nav capitalize"
                  >About</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/contact" class="btn nav capitalize"
                  >Contact</NuxtLink
                >
              </li>
            </ul>
          </div>
          <a href="/" class="btn btn-ghost normal-case text-xl">Portflow.</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 space-x-3">
            <li><NuxtLink to="/" class="btn nav capitalize">Home</NuxtLink></li>
            <li>
              <NuxtLink to="/stories" class="btn nav capitalize"
                >Stories</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/showcase" class="btn nav capitalize"
                >Showcase</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/about" class="btn nav capitalize">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="btn nav capitalize"
                >Contact</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <a tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://i.pravatar.cc/300?img=5" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
