<template>
    <div class="pt-10 page-bg">
        <div class="overlay"></div>
        <div class="content flex flex-col items-center gap-y-20 lg:gap-y-16 justify-center">
            <!-- header -->
            <div>
                <div class="z-40 flex justify-between items-center backdrop-blur-md bg-[#1920397c] rounded-bl-2xl rounded-br-2xl shadow-lg lg:rounded-2xl px-4 sm:px-10 md:pr-16 py-3 border border-white/20 w-full top-0">
                    
                    <nuxt-link class="lg:pr-16" to="/">
                        <img draggable="false" src="../assets/Logo.png" width="200px" alt="Logo">
                    </nuxt-link>
                
                    <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden p-2 text-white">
                        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    
                    <div class="hidden lg:block">
                        <ul class="grid grid-cols-4 gap-5 text-sm">
                            <li><nuxt-link class="flex items-center justify-end gap-2 text-white" to="/"><icons-dashboard-icon/><span>Dashboard</span></nuxt-link></li>
                            <li><nuxt-link class="flex items-center justify-end gap-2 text-white" to="/profile"><icons-profile-icon class="fill-[#666] w-4"/><span>Profile</span></nuxt-link></li>
                            <li><nuxt-link class="flex items-center justify-end gap-2 text-white" to="/signUp"><icons-circle-profile-icon class="fill-[#666] w-4"/><span>Sign Up</span></nuxt-link></li>
                            <li><nuxt-link class="flex items-center justify-end gap-2 text-white" to="/signIn"><icons-key-icon class="fill-[#666] w-4"/><span>Sign In</span></nuxt-link></li>
                        </ul>
                    </div>
                
                </div>
                
                <div v-if="isMenuOpen" @click="isMenuOpen = false" class="lg:hidden fixed inset-0 bg-black/50 z-40">
                    
                    <div @click.stop class="bg-[#2b334d] w-64 h-fit rounded-b-2xl pb-5 flex flex-col shadow-2xl overflow-y-auto">
                        
                        <div class="p-4 flex justify-between items-center text-white border-b border-white/10">
                            <nuxt-link to="/">
                                <img src="../assets/Logo.png" alt="">
                            </nuxt-link>
                        </div>
                
                        <ul class="flex flex-col text-white text-base py-2 p-5">
                            
                            <li>
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
                            </li>
                            
                            <li>
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
                            </li>
                            
                            <li>
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
                            </li>
                            
                            <li>
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
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>

            <div class="relative bg-[#1F293F] border border-white/6 rounded-2xl shadow-2xl p-5 w-72 lg:w-80 lg:h-96 xl:w-96 xl:h-[400px]">

                <div class="flex justify-center w-full items-center">
                    <div class="absolute flex flex-col justify-center items-center w-[90%] h-24 rounded-2xl bg-linear-to-b from-[#3289db] to-[#1956a1]">
                        <h1 class="text-2xl text-white font-semibold text-center">Sign In</h1>
                        <div class="flex gap-5 mt-3">
                            <a href="#">
                                <icons-facebook-icon class="w-6 fill-white" />
                            </a>
                            <a href="#">
                                <icons-instagram-icon class="w-6 fill-white" />
                            </a>
                            <a href="#">
                                <icons-github-icon class="w-6 fill-white" />
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div class="mt-14">
                    <form class="mt-24" action="#">
                        <input required type="email" class="w-full py-2 px-3 rounded-lg border focus:border-[#1956a1] focus:placeholder:text-[#649de2] duration-300 border-white/50 placeholder:text-white placeholder:text-sm placeholder:duration-300 text-white outline-none" placeholder="Email" name="" id="">
                        <input required type="password" class="w-full py-2 px-3 rounded-lg border focus:border-[#1956a1] focus:placeholder:text-[#649de2] duration-300 border-white/50 placeholder:text-white placeholder:text-sm placeholder:duration-300 text-white outline-none mt-4" placeholder="Password" name="" id="">


                        <div class="flex gap-2 items-center mt-5">
                            <label for="dark-mode-toggle" class="relative inline-flex items-center gap-2 cursor-pointer">
                                
                                <span class="relative inline-block w-14 h-8"> 
                                    <input type="checkbox" id="dark-mode-toggle" class="sr-only peer">
                                
                                    <span class="absolute inset-0 bg-gray-700 rounded-full transition-colors duration-300 ease-in-out peer-checked:bg-slate-600 shadow-inner">
                                    </span>
                                    
                                    <span class="absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ease-in-out transform peer-checked:translate-x-6 shadow-md">
                                    </span>
                                </span>
                                
                                <span class="text-white text-sm select-none">Remember Me</span>
                                
                            </label>
                        </div>

                        <div class="mt-5">
                            <button type="submit" class=" bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase py-2 px-16 rounded-full shadow-lg cursor-pointer shadow-blue-500/70 transition-all duration-300 ease-in-out text-sm w-full focus:outline-none focus:ring-4 focus:ring-blue-500/70
                            ">
                                SIGN IN
                            </button>
                        </div>

                    </form>

                    <div class="text-sm mt-5 flex justify-center">
                        <p class="text-gray-400 text-sm">
                            Don't have an account?
                            <a href="#" class="text-blue-500 hover:text-blue-400 font-medium transition-colors duration-200 text-sm">
                                Sign up
                            </a>
                        </p>
                    </div>
                    
                </div>
                

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()

const isMenuOpen = ref(false);

useHead({
  title: 'Sign In'
})
definePageMeta({
  layout: false
})
</script>

<style scoped>
.page-bg {
  position: relative;
  background-image: url(../assets/signInBg.webp);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(39, 53, 77, 0.342);
  z-index: 0;
}

.content {
  position: relative;
  z-index: 1;
}
</style>