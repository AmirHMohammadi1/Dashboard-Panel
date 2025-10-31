<template>
  <div class="lg:pl-70 pt-20 text-white">
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
        <div class="flex lg:flex-row flex-col gap-5 w-full mt-8">
            <div class="lg:w-[69%] w-full bg-[#202a44] rounded-2xl">
                <!-- title -->
                <div class="flex justify-between items-center relative p-5">
                    <div class="flex flex-col gap-y-2">
                        <span class="text-lg">Projects</span>
                        <div class="flex gap-1">
                            <icons-tick-icon class="text-[#1C60BE]"/>
                            <span class="text-sm">30 done this month</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <icons-tree-dots-icon @click="test" class="cursor-pointer size-7"/>
                            <div ref="dotMenu" class="bg-[#202a44] p-3 size-fit duration-300 shadow scale-0 absolute right-5 rounded-lg">
                                    <ul class="text-gray-300">
                                        <li class="w-full cursor-pointer hover:bg-[#364058] px-3 py-1 rounded-md duration-300 text-sm">Action</li>
                                        <li class="w-full cursor-pointer hover:bg-[#364058] px-3 py-1 rounded-md duration-300 text-sm">Another action</li>
                                        <li class="w-full cursor-pointer hover:bg-[#364058] px-3 py-1 rounded-md duration-300 text-sm">Something else</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- TABLE -->
                <div class="overflow-x-auto overflow-y-hidden w-full">
                    <!-- HEADER -->
                    <div class="flex w-full justify-between border-b border-[#737A88]">
                        <div class="min-w-[300px] p-5">
                            <span class="text-xs text-gray-400 uppercase font-bold font-sans">
                                companies
                            </span>
                        </div>
                        <div class="min-w-[100px] p-5">
                            <span class="text-xs text-gray-400 uppercase font-bold font-sans">
                                members
                            </span>
                        </div>
                        <div class="min-w-[100px] p-5">
                            <span class="text-xs text-gray-400 uppercase font-bold font-sans">
                                budget
                            </span>
                        </div>
                        <div class="min-w-[150px] p-5">
                            <span class="text-xs text-gray-400 uppercase font-bold font-sans">
                                completion
                            </span>
                        </div>
                    </div>

                    <!-- Table -->
                    <div class="flex justify-between border-b border-[#737A88]">
                        <div class="min-w-[300px] shrink-0 py-3 px-5">
                            <div class="flex gap-2 items-center">
                                <icons-xd-icon class="size-8"/>
                                <span>
                                    Material UI XD Version
                                </span>
                            </div>
                        </div>
                        <div class="min-w-[100px] max-w-[100px] shrink-0 py-3 px-5 flex items-center">
                            <div>
                                <div class="flex">
                                    <img 
                                    title="Ryan Tompson"
                                    draggable="false" class="w-6 cursor-pointer rounded-full border-2 hover:z-40 border-white" src="../assets/user-1.jpg" alt="">
                                    <img 
                                    title="Romina Hadid"
                                    draggable="false" class="w-6 cursor-pointer relative -left-2 rounded-full border-2 hover:z-40 border-white" src="../assets/user-2.jpg" alt="">
                                    <img 
                                    title="Alexander Smith"
                                    draggable="false" class="w-6 cursor-pointer relative -left-4 rounded-full border-2 hover:z-40 border-white" src="../assets/user-3.jpg" alt="">
                                    <img 
                                    title="Jessica Doe  "
                                    draggable="false" class="w-6 cursor-pointer relative -left-6 rounded-full border-2 hover:z-40 border-white" src="../assets/user-4.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="min-w-[100px] shrink-0 py-3 px-5 flex items-center">
                            <span class="text-xs font-semibold">
                                $14,000	
                            </span>
                        </div>
                        <div class="min-w-[150px] shrink-0 py-3 pr-5 flex items-center">
                            <div class="w-full h-1.5 rounded-md overflow-hidden bg-[#737A88]">
                                <div class="w-2/3 h-full rounded-r-xl bg-[#247DEA]"></div>
                            </div>
                        </div>
                    </div>  
                    
                    <div class="flex justify-between border-b border-[#737A88]">
                        <div class="min-w-[300px] shrink-0 py-3 px-5">
                            <div class="flex gap-2 items-center">
                                <icons-a-icon class="size-8"/>
                                <span>
                                    Add Progress Track
                                </span>
                            </div>
                        </div>
                        <div class="min-w-[100px] max-w-[100px] shrink-0 py-3 px-5 flex items-center">
                            <div>
                                <div class="flex">
                                    <img 
                                    title="Romina Hadid"
                                    draggable="false" class="w-6 cursor-pointer rounded-full border-2 hover:z-40 border-white" src="../assets/user-2.jpg" alt="">
                                    <img 
                                    title="Jessica Doe  "
                                    draggable="false" class="w-6 cursor-pointer relative -left-3 rounded-full border-2 hover:z-40 border-white" src="../assets/user-4.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="min-w-[100px] shrink-0 py-3 px-5 flex items-center">
                            <span class="text-xs font-semibold">
                                $3,000
                            </span>
                        </div>
                        <div class="min-w-[150px] shrink-0 py-3 pr-5 flex items-center">
                            <div class="w-full h-1.5 rounded-md overflow-hidden bg-[#737A88]">
                                <div class="w-1/5 h-full rounded-r-xl bg-[#247DEA]"></div>
                            </div>
                        </div>
                    </div>  

                    <div class="flex justify-between border-b border-[#737A88]">
                        <div class="min-w-[300px] shrink-0 py-3 px-5">
                            <div class="flex gap-2 items-center">
                                <icons-slack-icon class="size-8"/>
                                <span>
                                    Fix Platform Errors
                                </span>
                            </div>
                        </div>
                        <div class="min-w-[100px] max-w-[100px] shrink-0 py-3 px-5 flex items-center">
                            <div>
                                <div class="flex">
                                    <img 
                                    title="Romina Hadid"
                                    draggable="false" class="w-6 cursor-pointer rounded-full border-2 hover:z-40 border-white" src="../assets/user-1.jpg" alt="">
                                    <img 
                                    title="Jessica Doe  "
                                    draggable="false" class="w-6 cursor-pointer relative -left-3 rounded-full border-2 hover:z-40 border-white" src="../assets/user-3.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="min-w-[100px] shrink-0 py-3 px-5 flex items-center">
                            <span class="text-xs font-semibold">
                                Not set
                            </span>
                        </div>
                        <div class="min-w-[150px] shrink-0 py-3 pr-5 flex items-center">
                            <div class="w-full h-1.5 rounded-md overflow-hidden bg-[#737A88]">
                                <div class="w-full h-full rounded-r-xl bg-[#4DA851]"></div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-between border-b border-[#737A88]">
                        <div class="min-w-[300px] shrink-0 py-3 px-5">
                            <div class="flex gap-2 items-center">
                                <icons-sepatifay-icon class="size-8"/>
                                <span>
                                    Launch our Mobile App
                                </span>
                            </div>
                        </div>
                        <div class="min-w-[100px] max-w-[100px] shrink-0 py-3 px-5 flex items-center">
                            <div>
                                <div class="flex">
                                    <img 
                                    title="Ryan Tompson"
                                    draggable="false" class="w-6 cursor-pointer rounded-full border-2 hover:z-40 border-white" src="../assets/user-1.jpg" alt="">
                                    <img 
                                    title="Romina Hadid"
                                    draggable="false" class="w-6 cursor-pointer relative -left-2 rounded-full border-2 hover:z-40 border-white" src="../assets/user-2.jpg" alt="">
                                    <img 
                                    title="Alexander Smith"
                                    draggable="false" class="w-6 cursor-pointer relative -left-4 rounded-full border-2 hover:z-40 border-white" src="../assets/user-3.jpg" alt="">
                                    <img 
                                    title="Jessica Doe  "
                                    draggable="false" class="w-6 cursor-pointer relative -left-6 rounded-full border-2 hover:z-40 border-white" src="../assets/user-4.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="min-w-[100px] shrink-0 py-3 px-5 flex items-center">
                            <span class="text-xs font-semibold">
                                $20,500	
                            </span>
                        </div>
                        <div class="min-w-[150px] shrink-0 py-3 pr-5 flex items-center">
                            <div class="w-full h-1.5 rounded-md overflow-hidden bg-[#737A88]">
                                <div class="w-full h-full rounded-r-xl bg-[#4DA851]"></div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-between border-b border-[#737A88]">
                        <div class="min-w-[300px] shrink-0 py-3 px-5">
                            <div class="flex gap-2 items-center">
                                <icons-jira-icon class="size-8"/>
                                <span>
                                    Add the New Pricing Page
                                </span>
                            </div>
                        </div>
                        <div class="min-w-[100px] max-w-[100px] shrink-0 py-3 px-5 flex items-center">
                            <div>
                                <div class="flex">
                                    <img 
                                    title="Romina Hadid"
                                    draggable="false" class="w-6 cursor-pointer rounded-full border-2 hover:z-40 border-white" src="../assets/user-4.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="min-w-[100px] shrink-0 py-3 px-5 flex items-center">
                            <span class="text-xs font-semibold">
                                $500	
                            </span>
                        </div>
                        <div class="min-w-[150px] shrink-0 py-3 pr-5 flex items-center">
                            <div class="w-full h-1.5 rounded-md overflow-hidden bg-[#737A88]">
                                <div class="w-1/3 h-full rounded-r-xl bg-[#247DEA]"></div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-between">
                        <div class="min-w-[300px] shrink-0 py-3 px-5">
                            <div class="flex gap-2 items-center">
                                <icons-invision-icon class="size-8"/>
                                <span>
                                    Redesign New Online Shop
                                </span>
                            </div>
                        </div>
                        <div class="min-w-[100px] max-w-[100px] shrink-0 py-3 px-5 flex items-center">
                            <div>
                                <div class="flex">
                                    <img 
                                    title="Romina Hadid"
                                    draggable="false" class="w-6 cursor-pointer rounded-full border-2 hover:z-40 border-white" src="../assets/user-2.jpg" alt="">
                                    <img 
                                    title="Jessica Doe  "
                                    draggable="false" class="w-6 cursor-pointer relative -left-3 rounded-full border-2 hover:z-40 border-white" src="../assets/user-4.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="min-w-[100px] shrink-0 py-3 px-5 flex items-center">
                            <span class="text-xs font-semibold">
                                $2,000
                            </span>
                        </div>
                        <div class="min-w-[150px] shrink-0 py-3 pr-5 flex items-center">
                            <div class="w-full h-1.5 rounded-md overflow-hidden bg-[#737A88]">
                                <div class="w-1/2 h-full rounded-r-xl bg-[#247DEA]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/3 bg-[#202a44] rounded-2xl p-5">
                <!-- title -->
                <div class="flex justify-between items-center relative p-5">
                    <div class="flex flex-col gap-y-2">
                        <span class="text-lg">Orders overview</span>
                        <div class="flex gap-1">
                            <icons-up-icon class="text-green-500"/>
                            <span class="text-sm"><span class="font-semibold">24%</span> done this month</span>
                        </div>
                    </div>
                </div>
                <div>
                    <!-- 1 -->
                    <div class="flex gap-3 mb-6 relative z-30 before:absolute before:w-px before:h-[85%] before:left-[15px] before:-z-10 before:top-7.5 before:bg-gray-400">
                        <div class="bg-green-500 size-8 flex justify-center items-center rounded-full p-1">
                            <icons-notif-icon class="w-4"/>
                        </div>
                        <div class="flex flex-col text-xs">
                            <p>$2400, Design changes</p>
                            <p class="text-gray-400">22 DEC 7:20 PM</p>
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="flex gap-3 mb-6 relative z-30 before:absolute before:w-px before:h-[85%] before:left-[15px] before:-z-10 before:top-7.5 before:bg-gray-400">
                        <div class="bg-[#F44335] size-8 flex justify-center items-center rounded-full p-1">
                            <icons-shopping-bag-icon class="w-4"/>
                        </div>
                        <div class="flex flex-col text-xs">
                            <p>New order #1832412</p>
                            <p class="text-gray-400">21 DEC 11 PM</p>
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="flex gap-3 mb-6 relative z-30 before:absolute before:w-px before:h-[85%] before:left-[15px] before:-z-10 before:top-7.5 before:bg-gray-400">
                        <div class="bg-[#1A73E8] size-8 flex justify-center items-center rounded-full p-1">
                            <icons-shopping-basket-icon class="w-4"/>
                        </div>
                        <div class="flex flex-col text-xs">
                            <p class="">Server payments for April</p>
                            <p class="text-gray-400">21 DEC 9:34 PM</p>
                        </div>
                    </div>
                    <!-- 4 -->
                    <div class="flex gap-3 mb-6 relative z-30 before:absolute before:w-px before:h-[85%] before:left-[15px] before:-z-10 before:top-7.5 before:bg-gray-400">
                        <div class="bg-[#FB8C00] size-8 flex justify-center items-center rounded-full p-1">
                            <icons-calendar-icon class="w-4"/>
                        </div>
                        <div class="flex flex-col text-xs">
                            <p class="">New card added for order #4395133</p>
                            <p class="text-gray-400">20 DEC 2:20 AM</p>
                        </div>
                    </div>
                    <!-- 5 -->
                    <div class="flex gap-3 mb-6 relative z-30">
                        <div class="bg-[#E91E63] size-8 flex justify-center items-center rounded-full p-1">
                            <icons-key-icon class="w-4"/>
                        </div>
                        <div class="flex flex-col text-xs">
                            <p class="">New card added for order #4395133</p>
                            <p class="text-gray-400">18 DEC 4:54 AM</p>
                        </div>
                    </div>
                </div>
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