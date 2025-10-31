<template>
    <div class="lg:pl-70 pt-10">
        <div class="flex md:flex-row flex-col justify-between gap-5">

            <div class="md:w-[30%]">
                <div class="w-full bg-[#1c2741] border border-[#2b324b] text-gray-300 rounded-lg p-4">
                    <nav class="text-sm">
                        <ul class="space-y-1">
                        <li>
                            <button
                            @click="scrollToSection('profile')"
                            class="flex items-center p-2 rounded-md w-full cursor-pointer hover:bg-gray-700 hover:text-white">
                                <icons-profile-icon class="w-5 h-5 mr-3 text-gray-400"/>
                            <span>Profile</span>
                            </button>
                        </li>
                        <li>
                            <button
                            @click="scrollToSection('basic-info')"
                            class="flex items-center p-2 rounded-md w-full cursor-pointer hover:bg-gray-700 hover:text-white">
                                <icons-profile-icon class="w-5 h-5 mr-3 text-gray-400"/>
                            <span>Basic Info</span>
                            </button>
                        </li>
                        <li>
                            <button
                            @click="scrollToSection('change-password')"
                            class="flex items-center p-2 w-full cursor-pointer rounded-md hover:bg-gray-700 hover:text-white">
                                <icons-lock-icon class="w-5 h-5 mr-3 text-gray-400"/>
                            <span>Change Password</span>
                            </button>
                        </li>
                        <li>
                            <button
                            @click="scrollToSection('2fa')"
                            class="flex items-center p-2 rounded-md w-full cursor-pointer hover:bg-gray-700 hover:text-white">
                                <icons-2fa-icon class="w-5 h-5 mr-3 text-gray-400"/>
                            <span>2FA</span>
                            </button>
                        </li>
                        </ul>
        
                        <div class="my-2"></div>
        
                        <ul class="space-y-1">
                        <li>
                            <button
                            @click="scrollToSection('notification')"
                            class="flex items-center p-2 rounded-md w-full cursor-pointer hover:bg-gray-700 hover:text-white">
                            <icons-notif-icon class="w-5 h-5 mr-3 text-gray-400"/>
                            <span>Notifications</span>
                            </button>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 rounded-md hover:bg-gray-700 hover:text-white">
                            <icons-computer-icon class="w-5 h-5 mr-3 text-gray-400"/>
                            <span>Devices</span>
                            </a>
                        </li>
                        </ul>
        
                        <div class="my-2"></div>
        
                        <ul class="space-y-1">
                        <li>
                            <a href="#" class="flex items-center bg-red-500 p-2 rounded-md hover:bg-gray-700 hover:text-white">
                            <icons-delete-icon class="w-5 h-5 mr-3 text-gray-400"/>
                            <span>Delete Account</span>
                            </a>
                        </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div class="md:w-[70%]">
                
                <!-- profile Section -->
                <section id="profile">
                    <div class="w-full bg-[#1c2741] border border-[#2b324b] rounded-lg p-4 flex sm:flex-row flex-col gap-y-5 items-center justify-between shadow-lg">
                        
                        <div class="flex items-center">
                        <div class="w-16 h-16">
                            <img class="rounded-full" src="../assets/profileImage.jpg" alt="">
                        </div>
                        <div class="ml-4">
                            <h3 class="text-white text-lg font-semibold">Richard Davis</h3>
                            <p class="text-gray-400 text-sm">CEO / Co-Founder</p>
                        </div>
                        </div>
        
                        <div class="flex gap-2 items-center w-48">
                        <label for="visibility-toggle" class="relative inline-flex items-center gap-2 cursor-pointer">
                            <span class="relative inline-block w-14 h-8">
                            
                            <input 
                                type="checkbox" 
                                id="visibility-toggle" 
                                class="sr-only peer"
                                v-model="isVisible"
                            >
                            
                            <span class="absolute inset-0 bg-gray-700 rounded-full transition-colors duration-300 ease-in-out peer-checked:bg-indigo-600 shadow-inner"></span>
                            <span class="absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ease-in-out transform peer-checked:translate-x-6 shadow-md"></span>
                            </span>
                            
                            <span class="text-white text-sm select-none">
                            {{ isVisible ? 'Switch to Visible' : 'Switch to Invisible' }}
                            </span>
                        </label>
                        </div>
        
                    </div>
                </section>

                <!-- basic Info -->
                <section id="basic-info">
                    <div class="w-full bg-[#1c2741] mt-5 border border-[#2b324b] rounded-lg p-4 shadow-lg">
                        <h2 class="text-xl text-white mb-8">Basic Info</h2>
        
                        <form @submit.prevent="" class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
                            
                            <div>
                            <label for="first-name" class="block text-sm font-medium text-gray-300">First Name</label>
                            <input 
                                type="text" 
                                id="first-name" 
                                name="first-name" 
                                placeholder="Alec" 
                                class="mt-1 block w-full border-b border-gray-600 focus:border-[#E91E63] duration-300 focus:ring-white text-white sm:text-sm px-0 py-2 outline-none"
                            >
                            </div>
        
                            <div>
                            <label for="last-name" class="block text-sm font-medium text-gray-300">Last Name</label>
                            <input 
                                type="text" 
                                id="last-name" 
                                name="last-name" 
                                placeholder="Thompson" 
                                class="mt-1 block w-full border-b border-gray-600 focus:border-[#E91E63] duration-300 focus:ring-white text-white sm:text-sm px-0 py-2 outline-none"
                            >
                            </div>
        
                            <div>
                            <label for="gender" class="block text-sm font-medium text-gray-300">I'm</label>
                            <div class="relative mt-1">
                                <select 
                                id="gender" 
                                name="gender" 
                                class="block appearance-none w-full border-b border-gray-600 focus:border-[#E91E63] duration-300 focus:ring-white text-white sm:text-sm pr-8 py-2 outline-none"
                                >
                                <option value="">Male</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                                </div>
                            </div>
                            </div>
        
                            <div>
                            <label class="block text-sm font-medium text-gray-300">Birth Date</label>
                            <div class="mt-1 flex gap-2">
                                <div class="relative">
                                <select 
                                    id="birth-month" 
                                    name="birth-month" 
                                    class="block appearance-none w-full border-b border-gray-600 focus:border-[#E91E63] duration-300 focus:ring-white text-white sm:text-sm pr-8 py-2 outline-none"
                                >
                                    <option value="">February</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                </div>
                                <div class="relative w-1/4">
                                <select 
                                    id="birth-day" 
                                    name="birth-day" 
                                    class="block appearance-none w-full border-b border-gray-600 focus:border-[#E91E63] duration-300 focus:ring-white text-white sm:text-sm pr-8 py-2 outline-none"
                                >
                                    <option value="">1</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                </div>
                                <div class="relative w-1/4">
                                <select 
                                    id="birth-year" 
                                    name="birth-year" 
                                    class="block appearance-none w-full border-b border-gray-600 focus:border-[#E91E63] duration-300 focus:ring-white text-white sm:text-sm pr-8 py-2 outline-none"
                                >
                                    <option value="">2020</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                </div>
                            </div>
                            </div>
        
                            <div>
                            <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="example@email.com" 
                                class="mt-1 block w-full border-b border-gray-600 focus:border-[#E91E63] duration-300 focus:ring-white text-white sm:text-sm px-0 py-2 outline-none"
                            >
                            </div>
        
                            <div>
                            <label for="confirm-email" class="block text-sm font-medium text-gray-300">Confirm Email</label>
                            <input 
                                type="email" 
                                id="confirm-email" 
                                name="confirm-email" 
                                placeholder="example@email.com" 
                                class="mt-1 block w-full border-b border-gray-600 focus:border-[#E91E63] duration-300 focus:ring-white text-white sm:text-sm px-0 py-2 outline-none"
                            >
                            </div>
        
                            <div>
                            <label for="location" class="block text-sm font-medium text-gray-300">Your location</label>
                            <input 
                                type="text" 
                                id="location" 
                                name="location" 
                                placeholder="Sydney, A" 
                                class="mt-1 block w-full border-b border-gray-600 focus:border-[#E91E63] duration-300 focus:ring-white text-white sm:text-sm px-0 py-2 outline-none"
                            >
                            </div>
        
                            <div>
                            <label for="phone-number" class="block text-sm font-medium text-gray-300">Phone Number</label>
                            <input 
                                type="tel" 
                                id="phone-number" 
                                name="phone-number" 
                                placeholder="+40 735 631 620" 
                                class="mt-1 block w-full border-b border-gray-600 focus:border-[#E91E63] duration-300 focus:ring-white text-white sm:text-sm px-0 py-2 outline-none"
                            >
                            </div>
    
                            
                        
                        </form>
    
    
                        <div class="mt-5">
                            <label for="phone-number" class="block text-sm pb-1 font-medium text-gray-300">Skills</label>
                            <div class="flex sm:flex-row flex-col gap-5">
                                <div class="bg-[#1e2e52] rounded-2xl p-2 border border-[#2b324b] flex gap-1 sm:w-1/2 flex-wrap">
    
                                    <button 
                                    @click="removerLabel(index)"
                                    v-for="(item, index) in labelsArray" :key="index"
                                    class="bg-[#191919] cursor-pointer flex justify-between items-center w-fit text-white px-3 h-7 rounded-full">
                                        <span class="text-xs border-r pr-2 border-gray-400/30">{{ item }}</span>
                                        <icons-x-icon class="w-5 pl-1"/>
                                    </button>
    
                                </div>
                                <div class="sm:w-1/2">
                                    <input
                                    @keyup.enter="pushToLabelsArray"
                                    v-model="labelText"
                                    type="tel" 
                                    id="phone-number" 
                                    name="phone-number" 
                                    placeholder="Add Some Skills"
                                    class="mt-1 block w-full border-b border-gray-600 focus:border-[#E91E63] duration-300 focus:ring-white text-white sm:text-sm px-0 py-2 outline-none"
                                    >
                                </div>
                            </div>
                        </div>
    
                    </div>
                </section>

            </div>

        </div>

        <!-- change password -->
        <section id="change-password">
            <div class="w-full relative bg-[#1c2741] border border-[#2b324b] p-6 rounded-lg shadow-lg mt-5">
                <h2 class="text-xl text-white mb-8">Change Password</h2>
    
                <form @submit.prevent="" class="space-y-4">
                    <div>
                    <input type="password" placeholder="Current password" class="w-full md:w-2/3 px-4 py-2 rounded-xl text-white border-gray-600/50 focus:outline-none border duration-300 focus:border-[#E91E63] focus:placeholder:text-[#ee437c] placeholder:duration-300 placeholder:text-sm" />
                    </div>
    
                    <div>
                    <input type="password" placeholder="New password" class="w-full md:w-2/3 px-4 py-2 rounded-xl text-white border-gray-600/50 focus:outline-none border duration-300 focus:border-[#E91E63] focus:placeholder:text-[#ee437c] placeholder:duration-300 placeholder:text-sm" />
                    </div>
    
                    <div>
                    <input type="password" placeholder="Confirm password" class="w-full md:w-2/3 px-4 py-2 rounded-xl text-white border-gray-600/50 focus:outline-none border duration-300 focus:border-[#E91E63] focus:placeholder:text-[#ee437c] placeholder:duration-300 placeholder:text-sm" />
                    </div>
    
                    <div class="mt-6">
                    <h3 class="text-xl mb-2 text-white">Password requirements:</h3>
                    <h3 class="mb-2 text-[#8E8E8E]">Please follow this guide for a strong password:</h3>
                    <ul class="list-disc list-inside text-sm text-[#777777] space-y-1">
                        <li>At least one special character</li>
                        <li>Minimum 6 characters</li>
                        <li>At least one number (2 recommended)</li>
                        <li>Change it often</li>
                    </ul>
                    </div>
    
                    <div class="mt-6 absolute right-5 bottom-5 text-end">
                    <button type="submit" class="bg-linear-to-b from-[#1F253B] via-[#192036] to-[#1F253B] text-sm cursor-pointer py-2 px-4 rounded-2xl text-gray-200/80">
                        Update password
                    </button>
                    </div>
                </form>
            </div>
        </section>

        <!-- Two-factor authentication -->
        <section id="2fa">
            <div class="w-full relative bg-[#1c2741] border border-[#2b324b] p-6 rounded-lg shadow-lg mt-5">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl text-white">Two-factor authentication</h2>
                    <span class="px-3 py-1 bg-[#BCE2BE] text-[#419D45] text-sm font-semibold rounded-md">
                        Enabled
                    </span>
                </div>
    
                <div class="mt-7">
                    <div class="flex justify-between items-center gap-2">
                        <div class="text-[#969696] sm:text-[16px] text-sm">
                            Security keys
                        </div>
                        <div class="flex gap-3 items-center">
                            <div class="text-[#b3b3b3] sm:text-[16px] text-sm text-right">No Security Keys</div>
                            <button class="py-1 px-3 cursor-pointer rounded-lg border-2 border-gray-700 text-gray-700">Add</button>
                        </div>
                    </div>
                    <div class="w-full h-px bg-linear-to-r from-white/5 via-white to-white/5 my-4"></div>
        
                    <div class="flex justify-between items-center">
                        <div class="text-[#969696] sm:text-[16px] text-sm">
                            SMS number
                        </div>
                        <div class="flex gap-3 items-center">
                            <div class="text-[#b3b3b3] text-right sm:text-[16px] text-sm">+4012374423</div>
                            <button class="py-1 px-3 cursor-pointer rounded-lg border-2 border-gray-700 text-gray-700">Edit</button>
                        </div>
                    </div>
                    <div class="w-full h-px bg-linear-to-r from-white/5 via-white to-white/5 my-4"></div>
        
                    <div class="flex justify-between items-center">
                        <div class="text-[#969696] sm:text-[16px] text-sm">
                            Authenticator app
                        </div>
                        <div class="flex gap-3 items-center">
                            <div class="text-[#b3b3b3] sm:text-[16px] text-sm text-right">Not Configured</div>
                            <button class="py-1 whitespace-nowrap px-3 cursor-pointer rounded-lg border-2 border-gray-700 text-gray-700">Set Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="notification">
            <div class="w-full relative bg-[#1c2741] border border-[#2b324b] p-6 rounded-lg shadow-lg mt-5">
                    <!-- title -->
                    <div class="flex justify-between items-center relative">
                        <div class="flex flex-col gap-y-2">
                            <h2 class="text-xl text-white">Notification</h2>
                            <span class="text-sm text-gray-400">Choose how you receive notifications. These notification settings apply to the things you’re watching.</span>
                        </div>
                    </div>
                    <!-- TABLE -->
                    <div class="overflow-x-auto overflow-y-hidden w-full">
                        <!-- HEADER -->
                        <div class="flex w-full justify-between border-b border-[#737A88]">
                            <div class="min-w-[300px] p-5">
                                <span class="text-xs text-gray-400 uppercase font-bold font-sans">
                                    Activity
                                </span>
                            </div>
                            <div class="min-w-[100px] p-5">
                                <span class="text-xs text-gray-400 uppercase font-bold font-sans">
                                    Email
                                </span>
                            </div>
                            <div class="min-w-[100px] p-5">
                                <span class="text-xs text-gray-400 uppercase font-bold font-sans">
                                    Push
                                </span>
                            </div>
                            <div class="min-w-[150px] p-5">
                                <span class="text-xs text-gray-400 uppercase font-bold font-sans">
                                    SMS
                                </span>
                            </div>
                        </div>
    
                        <!-- Table -->
                        <div class="flex justify-between border-b border-[#737A88]">
                            <div class="min-w-[300px] shrink-0 py-3 px-5">
                                <div class="flex flex-col text-sm">
                                    <span class="text-white">Mentions</span>
                                    <span class="text-gray-400 pt-1">
                                        Notify when another user <br> mentions you in a comment
                                    </span>
                                </div>
                            </div>
                            <div class="min-w-[100px] max-w-[100px] shrink-0 py-3 px-5 flex items-center">
                                <div>
                                    <btn checked/>
                                </div>
                            </div>
                            <div class="min-w-[100px] shrink-0 py-3 px-5 flex items-center">
                                <span class="text-xs font-semibold">
                                    <btn/>
                                </span>
                            </div>
                            <div class="min-w-[150px] shrink-0 py-3 px-5 flex items-center">
                                <btn/>
                            </div>
                        </div>  
                        
                        <div class="flex justify-between border-b border-[#737A88]">
                            <div class="min-w-[300px] shrink-0 py-3 px-5">
                                <div class="flex flex-col text-sm">
                                    <span class="text-white">Comments</span>
                                    <span class="text-gray-400 pt-1">
                                        Notify when another <br> user comments your item.
                                    </span>
                                </div>
                            </div>
                            <div class="min-w-[100px] max-w-[100px] shrink-0 py-3 px-5 flex items-center">
                                <div>
                                    <btn checked/>
                                </div>
                            </div>
                            <div class="min-w-[100px] shrink-0 py-3 px-5 flex items-center">
                                <span class="text-xs font-semibold">
                                    <btn checked/>
                                </span>
                            </div>
                            <div class="min-w-[150px] shrink-0 py-3 px-5 flex items-center">
                                <btn/>
                            </div>
                        </div>  
    
                        <div class="flex justify-between border-b border-[#737A88]">
                            <div class="min-w-[300px] shrink-0 py-3 px-5">
                                <div class="flex flex-col text-sm">
                                    <span class="text-white">Follows</span>
                                    <span class="text-gray-400 pt-1">
                                        Notify when another user <br> follows you.
                                    </span>
                                </div>
                            </div>
                            <div class="min-w-[100px] max-w-[100px] shrink-0 py-3 px-5 flex items-center">
                                <div>
                                    <btn/>
                                </div>
                            </div>
                            <div class="min-w-[100px] shrink-0 py-3 px-5 flex items-center">
                                <span class="text-xs font-semibold">
                                    <btn checked/>
                                </span>
                            </div>
                            <div class="min-w-[150px] shrink-0 py-3 px-5 flex items-center">
                                <btn/>
                            </div>
                        </div>  
    
                        <div class="flex justify-between">
                            <div class="min-w-[300px] shrink-0 py-3 px-5">
                                <div class="flex items-center h-full text-sm">
                                    <span class="text-gray-400 pt-1">
                                        Log in from a new device
                                    </span>
                                </div>
                            </div>
                            <div class="min-w-[100px] max-w-[100px] shrink-0 py-3 px-5 flex items-center">
                                <div>
                                    <btn checked/>
                                </div>
                            </div>
                            <div class="min-w-[100px] shrink-0 py-3 px-5 flex items-center">
                                <span class="text-xs font-semibold">
                                    <btn checked/>
                                </span>
                            </div>
                            <div class="min-w-[150px] shrink-0 py-3 px-5 flex items-center">
                                <btn checked/>
                            </div>
                        </div>  
    
                  
                   
                    </div>
            </div>
        </section>
        
    </div>
</template>
<script setup>
import { ref, watch, reactive } from 'vue';

useHead({
  title: 'Profile'
})

const isVisible = ref(false);

watch(isVisible, (newValue) => {
  console.log('User status changed to:', newValue ? 'Switch to Visible' : 'Invisible');
});

const labelText = ref('')
const labelsArray = reactive(['vueJs','angular','react'])

let pushToLabelsArray = () => {
    labelsArray.push(labelText.value)
   labelText.value = '';
    console.log(labelsArray)
}
let removerLabel = (index) => {
    labelsArray.splice(index, 1)
}


const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 120;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
};

</script>