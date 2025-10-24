<template>
  <div class="lg:pl-70 pt-10 text-white">
        <div class="w-full justify-between gap-10 lg:gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div class="bg-[#202a44] w-full p-4 relative rounded-2xl shadow-lg flex flex-col justify-between">
                <div class="w-16 h-16 absolute flex justify-center items-center -top-5 rounded-2xl bg-linear-to-bl from-[#2E364F] shadow-xl to-[#181e30]">
                    <icons-book-icon/>
                </div>
                <div class="flex flex-col">
                    <span class="text-[#CDCFD9] text-right">Bookings</span>
                    <span class="font-semibold text-2xl text-right">281</span>
                </div>
                <div class="w-full h-px bg-linear-to-r from-white/5 via-white to-white/5 my-4"></div>
                <div>
                    <span class="font-semibold text-green-400 mr-2">+55%</span>
                    <span>than last week</span>
                </div>
            </div>
            <div class="bg-[#202a44] w-full p-4 relative rounded-2xl shadow-lg flex flex-col justify-between">
                <div class="w-16 h-16 absolute flex justify-center items-center -top-5 rounded-2xl bg-linear-to-bl from-[#3F99EF] shadow-xl to-[#1a4064]">
                    <icons-chart-icon/>
                </div>
                <div class="flex flex-col">
                    <span class="text-[#CDCFD9] text-right">Today's Users</span>
                    <span class="font-semibold text-2xl text-right">2,300</span>
                </div>
                <div class="w-full h-px bg-linear-to-r from-white/5 via-white to-white/5 my-4"></div>
                <div>
                    <span class="font-semibold text-green-400 mr-2">+3%</span>
                    <span>than last month</span>
                </div>
            </div>
            <div class="bg-[#202a44] w-full p-4 relative rounded-2xl shadow-lg flex flex-col justify-between">
                <div class="w-16 h-16 absolute flex justify-center items-center -top-5 rounded-2xl bg-linear-to-bl from-[#5EB562] shadow-xl to-[#327035]">
                    <icons-shop-icon/>
                </div>
                <div class="flex flex-col">
                    <span class="text-[#CDCFD9] text-right">Revenue</span>
                    <span class="font-semibold text-2xl text-right">34k</span>
                </div>
                <div class="w-full h-px bg-linear-to-r from-white/5 via-white to-white/5 my-4"></div>
                <div>
                    <span class="font-semibold text-green-400 mr-2">+1%</span>
                    <span>than yesterday</span>
                </div>
            </div>
            <div class="bg-[#202a44] w-full p-4 relative rounded-2xl shadow-lg flex flex-col justify-between">
                <div class="w-16 h-16 absolute flex justify-center items-center -top-5 rounded-2xl bg-linear-to-bl from-[#E93A76] shadow-xl to-[#701e39]">
                    <icons-user-plus-icon/>
                </div>
                <div class="flex flex-col">
                    <span class="text-[#CDCFD9] text-right">Followers</span>
                    <span class="font-semibold text-2xl text-right">+91</span>
                </div>
                <div class="w-full h-px bg-linear-to-r from-white/5 via-white to-white/5 my-4"></div>
                <div>
                    <span>
                        <span class="mr-2"> Just updated</span>
                    </span>
                </div>
            </div>
        </div>
  </div>
</template>
<script setup>
useHead({
  title: 'Dashboard'
})
</script>