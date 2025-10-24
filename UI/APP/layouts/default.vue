<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col">


    <!-- ===== Main Section ===== -->
    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside class="w-64 bg-[#1F283E] m-5 rounded-2xl p-4 border-r border-gray-200">
        <img src="../assets/Logo.png" alt="">

        <ul class="pt-10 font-semibold space-y-5">
            <li class="text-white bg-linear-to-r from-blue-400 to-blue-500 to-50% py-3 px-5 cursor-pointer rounded-xl flex gap-3">
                <IconsHomeIcon />
                <span>
                    Dashboard
                </span>
            </li>
            <li class="text-white">account</li>
            <li class="text-white">Services</li>
            <li class="text-white">My Privileges</li>
            <li class="text-white">Setting</li>
        </ul>
      </aside>

      <!-- Page Content -->
      <main class="flex-1 p-6">
        <slot />
      </main>
    </div>

  </div>
</template>
<script>

</script>
