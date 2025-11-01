<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden">
    <!-- ===== Main Section ===== -->
    <div class="flex flex-1 relative">
      <!-- Sidebar -->
      <div
        :class="[
          menuStatus ? 'left-0' : '-left-[500px]',
          'lg:left-0 duration-700 fixed  z-50'
        ]"
      >
        <aside
          class="w-64 sm:w-60 bg-[#1F283E] h-screen lg:h-[94vh] m-0 lg:m-5 rounded-none lg:rounded-2xl p-4 border border-[#2b324b] fixed overflow-y-auto"
        >
        <nuxt-link to="/">
            <img draggable="false" src="../assets/Logo.png" alt="Logo" class="mx-auto" />
        </nuxt-link>

          <div class="w-full h-px bg-linear-to-r from-white/5 via-white to-white/5 my-5"></div>

          <ul class="space-y-2">
            <nuxt-link
              to="/"
              :class="[
                'text-white py-3 px-5 duration-300 hover:bg-white/30 cursor-pointer rounded-xl flex gap-3 items-center',
                route.path === '/' ? 'bg-linear-to-r from-blue-400 to-blue-500' : ''
              ]"
            >
              <IconsHomeIcon />
              <span>Dashboard</span>
            </nuxt-link>

            <nuxt-link
              to="/profile"
              :class="[
                'text-white py-3 px-5 duration-300 hover:bg-white/30 cursor-pointer rounded-xl flex gap-3 items-center',
                route.path === '/profile' ? 'bg-linear-to-r from-blue-400 to-blue-500' : ''
              ]"
            >
              <IconsProfileIcon />
              <span>Profile</span>
            </nuxt-link>

            <nuxt-link
              to="/table"
              :class="[
                'text-white py-3 px-5 duration-300 hover:bg-white/30 cursor-pointer rounded-xl flex gap-3 items-center',
                route.path === '/table' ? 'bg-linear-to-r from-blue-400 to-blue-500' : ''
              ]"
            >
              <IconsTableIcon />
              <span>Table</span>
            </nuxt-link>

            <nuxt-link
              to="/services"
              :class="[
                'text-white py-3 px-5 duration-300 hover:bg-white/30 cursor-pointer rounded-xl flex gap-3 items-center',
                route.path === '/services' ? 'bg-linear-to-r from-blue-400 to-blue-500' : ''
              ]"
            >
              <IconsServicesIcon />
              <span>Services</span>
            </nuxt-link>

            <nuxt-link
              to="/notification"
              :class="[
                'text-white py-3 px-5 duration-300 hover:bg-white/30 cursor-pointer rounded-xl flex gap-3 items-center',
                route.path === '/notification' ? 'bg-linear-to-r from-blue-400 to-blue-500' : ''
              ]"
            >
              <IconsNotifIcon />
              <span>Notification</span>
            </nuxt-link>

            <nuxt-link
              to="/signIn"
              :class="[
                'text-white py-3 px-5 duration-300 hover:bg-white/30 cursor-pointer rounded-xl flex gap-3 items-center',
                route.path === '/signIn' ? 'bg-linear-to-r from-blue-400 to-blue-500' : ''
              ]"
            >
              <IconsSignInIcon />
              <span>Sign In</span>
            </nuxt-link>
            <nuxt-link
              to="/signUp"
              :class="[
                'text-white py-3 px-5 duration-300 hover:bg-white/30 cursor-pointer rounded-xl flex gap-3 items-center',
                route.path === '/signUp' ? 'bg-linear-to-r from-blue-400 to-blue-500' : ''
              ]"
            >
              <IconsSignOutIcon />
              <span>Sign Up</span>
            </nuxt-link>
          </ul>
        </aside>
      </div>

      <!-- Page Content -->
      <main class="flex-1 p-4 sm:p-6 overflow-x-hidden">
        <div class="fixed z-40 flex sm:flex-row flex-col justify-between backdrop-blur-md bg-[#1920393f] rounded-bl-2xl rounded-br-2xl  lg:rounded-2xl px-5 py-3 border border-white/10
            w-full lg:w-[calc(100%-20.5rem)] top-0 lg:top-auto left-0 lg:left-[305px]">
            <div class="flex flex-col justify-center">
                <div class="flex">
                    <nuxt-link to="/">
                        <IconsHomeIcon class="text-gray-400 w-4"/>
                    </nuxt-link>
                    <span class="text-gray-400 px-1">/</span>
                    <span class="text-white">{{ pageName  }}</span>
                </div>
                <div>
                    <span class="text-white">{{ pageName }}</span>
                </div>
            </div>
            <div class="mt-3 flex gap-5 items-center justify-between">
                <input class="py-2 px-5 w-40 lg:w-auto rounded-md focus:outline-blue-500 text-white border border-white/50 placeholder:text-white" placeholder="Search HERE" type="search" name="" id="">
                
                <div class="flex gap-3 text-gray-400 items-center">
                    <nuxt-link to="/setting">
                        <IconsSettingIcon/>
                    </nuxt-link>
                    <nuxt-link to="/profile">
                        <IconsCircleProfileIcon/>
                    </nuxt-link>
                    <nuxt-link to="/notification">
                        <IconsNotifIcon/>
                    </nuxt-link>
                    <button class="lg:hidden block text-white" @click="changeMenuStatus">
                        <IconsHamburgerMenuIcon class="size-10" />
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-20 overflow-x-hidden">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuStatus = ref(false)

const changeMenuStatus = () => {
  menuStatus.value = !menuStatus.value
}

const pageName = computed(() => {
  switch (route.path) {
    case '/':
      return 'Dashboard'
    case '/profile':
      return 'Profile'
    case '/table':
      return 'Table'
    case '/services':
      return 'Services'
    case '/notification':
      return 'Notification'
    case '/signIn':
      return 'sign In'
    case '/signUp':
      return 'sign Up'
    default:
      return ''
  }
})
</script>
