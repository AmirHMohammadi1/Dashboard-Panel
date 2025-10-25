<template>
  <div class="lg:pl-70 pt-10 text-white">
        <!-- Dashboard Metrics -->
        <div class="w-full justify-between gap-10 lg:gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-7">
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

        <!-- Charts -->
        <div class="grid md:grid-cols-2 gap-y-16 lg:grid-cols-3 gap-5 mt-16">

            <div class="bg-[#202a44] p-4 rounded-2xl">
                <div class="p-4 bg-linear-to-b relative -top-10 from-[#3289db] to-[#1956a1] rounded-xl">
                    <bar-chart/>
                </div>
                <div class="relative -top-5">
                    <p class="text-lg">website views</p>
                    <p class="text-gray-400 text-sm">Last Campaign Performance</p>
                    <div class="w-full h-px bg-linear-to-r from-white/5 via-white to-white/5 my-4"></div>
                    <div class="flex items-center gap-2">
                        <span>
                            <icons-time-icon class="w-4"/>
                        </span>
                        <span class="text-gray-400 text-sm">campaign sent 2 days ago</span>
                    </div>
                </div>
            </div>

            <div class="bg-[#202a44] p-4 rounded-2xl">
                <div class="p-4 bg-linear-to-b relative -top-10 from-[#5EB562] to-[#347937] rounded-xl">
                    <green-line-chart/>
                </div>
                <div class="relative -top-5">
                    <p class="text-lg">daily sales</p>
                    <p class="text-gray-400 text-sm">(+15%) increase in today sales.</p>
                    <div class="w-full h-px bg-linear-to-r from-white/5 via-white to-white/5 my-4"></div>
                    <div class="flex items-center gap-2">
                        <span>
                            <icons-time-icon class="w-4"/>
                        </span>
                        <span class="text-gray-400 text-sm">updated 4 min ago</span>
                    </div>
                </div>
            </div>

            <div class="bg-[#202a44] p-4 rounded-2xl">
                <div class="p-4 bg-linear-to-b relative -top-10 from-[#2F3650] to-[#22273a] rounded-xl">
                    <black-line-chart/>
                </div>
                <div class="relative -top-5">
                    <p class="text-lg">completed tasks</p>
                    <p class="text-gray-400 text-sm">Last Campaign Performance</p>
                    <div class="w-full h-px bg-linear-to-r from-white/5 via-white to-white/5 my-4"></div>
                    <div class="flex items-center gap-2">
                        <span>
                            <icons-time-icon class="w-4"/>
                        </span>
                        <span class="text-gray-400 text-sm">just updated</span>
                    </div>
                </div>
            </div>

        </div>

        <!-- Table & Orders -->
        <div class="flex md:flex-row flex-col gap-5 w-full mt-8">
            <div class="w-full md:w-1/2 lg:w-1/3 bg-[#202a44] rounded-2xl p-5">
                order overView
            </div>
        </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

useHead({
  title: 'Dashboard'
})

const dotMenu = ref(null)
let dotStatus = ref(false)

let test = () => {
    dotStatus.value = !dotStatus.value
    
    if(dotStatus.value){
        dotMenu.value.classList.replace('scale-0','scale-100')
    }else{
        dotMenu.value.classList.replace('scale-100','scale-0')
    }
}

// const headers = [
//     {
//       align: 'start',
//       key: 'name',
//       sortable: false,
//       title: 'Dessert (100g serving)',
//     },
//     { key: 'calories', title: 'Calories' },
//     { key: 'fat', title: 'Fat (g)' },
//     { key: 'carbs', title: 'Carbs (g)' },
//     { key: 'protein', title: 'Protein (g)' },
//   ]
//   const desserts = [
//     {
//       name: 'Frozen Yogurt',
//       calories: 159,
//       fat: 6,
//       carbs: 24,
//       protein: 4,
//       iron: 1,
//     },
//     {
//       name: 'Ice cream sandwich',
//       calories: 237,
//       fat: 9,
//       carbs: 37,
//       protein: 4.3,
//       iron: 1,
//     },
//     {
//       name: 'Eclair',
//       calories: 262,
//       fat: 16,
//       carbs: 23,
//       protein: 6,
//       iron: 7,
//     },
//     {
//       name: 'Cupcake',
//       calories: 305,
//       fat: 3.7,
//       carbs: 67,
//       protein: 4.3,
//       iron: 8,
//     },
//     {
//       name: 'Gingerbread',
//       calories: 356,
//       fat: 16,
//       carbs: 49,
//       protein: 3.9,
//       iron: 16,
//     },
//     {
//       name: 'Jelly bean',
//       calories: 375,
//       fat: 0,
//       carbs: 94,
//       protein: 0,
//       iron: 0,
//     },
//   ]
</script>