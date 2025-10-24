<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col">


    <!-- ===== Main Section ===== -->
    <div class="flex flex-1">
      <!-- Sidebar -->
       <div
            :class="[
            menuStatus ? 'left-0' : '-left-[500px]',
            'lg:left-0 relative duration-700']">
           <aside class="w-64 z-50 bg-[#1F283E] fixed h-fit lg:h-[94vh] m-3 lg:m-5 rounded-2xl p-4 border border-[#2b324b]">
             <img src="../assets/Logo.png" alt="">
             
             <div class="w-full h-px bg-linear-to-r from-white/5 via-white to-white/5 my-5">
     
             </div>
     
             <ul class="space-y-2">
                 <nuxtLink to="/" 
                 :class="{ 'bg-linear-to-r from-blue-400 to-blue-500': route.path === '/' }"
                 class="text-white py-3 px-5 duration-300 hover:bg-white/30 cursor-pointer rounded-xl flex gap-3">
                     <IconsHomeIcon />
                     <span>
                         Dashboard
                     </span>
                 </nuxtLink>
                 <nuxtLink to="/profile" 
                 :class="{ 'bg-linear-to-r from-blue-400 to-blue-500': route.path === '/profile' }"
                 class="text-white py-3 px-5 duration-300 hover:bg-white/30 cursor-pointer rounded-xl flex gap-3">
                     <IconsProfileIcon />
                     <span>
                         Profile
                     </span>
                 </nuxtLink>
                 <nuxtLink to="/table"
                 :class="{ 'bg-linear-to-r from-blue-400 to-blue-500': route.path === '/table' }"
                 class="text-white py-3 px-5 duration-300 hover:bg-white/30 cursor-pointer rounded-xl flex gap-3">
                     <IconsTableIcon />
                     <span>
                         Table
                     </span>
                 </nuxtLink>
                 <nuxtLink to="/services" 
                 :class="{ 'bg-linear-to-r from-blue-400 to-blue-500': route.path === '/services' }"
                 class="text-white py-3 px-5 duration-300 hover:bg-white/30 cursor-pointer rounded-xl flex gap-3">
                     <IconsServicesIcon />
                     <span>
                         Services
                     </span>
                 </nuxtLink>
                 <nuxtLink to="/notification" 
                 :class="{ 'bg-linear-to-r from-blue-400 to-blue-500': route.path === '/notification' }"
                 class="text-white py-3 px-5 duration-300 hover:bg-white/30 cursor-pointer rounded-xl flex gap-3">
                     <IconsNotifIcon />
                     <span>
                         Notification
                     </span>
                 </nuxtLink>
                 <nuxtLink to="/setting" 
                 :class="{ 'bg-linear-to-r from-blue-400 to-blue-500': route.path === '/setting' }"
                 class="text-white py-3 px-5 duration-300 hover:bg-white/30 cursor-pointer rounded-xl flex gap-3">
                     <IconsSettingIcon />
                     <span>
                         Setting
                     </span>
                 </nuxtLink>
             </ul>
           </aside>
       </div>

      <!-- Page Content -->
      <main class="flex-1 p-6">
        <div class="fixed z-40 flex sm:flex-row flex-col justify-between backdrop-blur-md bg-[#192039]/80  rounded-bl-2xl rounded-br-2xl  lg:rounded-2xl px-5 py-3 border border-white/10
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

        <div class="mt-20">
            <slot />
        </div>
      </main>
    </div>

  </div>
</template>

<script setup>

    import { useRoute } from 'vue-router'

    const route = useRoute()
    const menuStatus = ref(false)

    const changeMenuStatus = () => {
        menuStatus.value = !menuStatus.value

        console.log(menuStatus.value)
    }
    
    const pageName = computed(() => {
  switch (route.path) {
    case '/': return 'Dashboard'
    case '/profile': return 'Profile'
    case '/table': return 'Table'
    case '/services': return 'Services'
    case '/notification': return 'Notification'
    case '/setting': return 'Setting'
    default: return ''
  }
})
</script>
