<template>
  <div class="lg:pl-70 py-10">
    <div class="w-full bg-[#1c2741] h-1/2 border border-[#2b324b] text-gray-300 rounded-lg p-4">
      <transition-group name="fade" tag="div">
        <div
          v-for="(item, index) in notifBoxs"
          :key="item.text"
          class="py-4 rounded-xl px-5 mb-3 gap-5 flex justify-between items-center"
          :style="{ background: item.color }"
        >
          {{ item.text }}
          <div @click="removeAlert(index)" class="cursor-pointer">
            <icons-x-icon />
          </div>
        </div>
      </transition-group>
    </div>

    <div class="w-full mt-5 bg-[#1c2741] h-1/2 border border-[#2b324b] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-gray-300 rounded-lg p-4">
      <button
        v-for="(btn, index) in buttons"
        :key="index"
        @click="showNotif(btn)"
        class="relative w-full text-center cursor-pointer text-white py-2 px-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out
               hover:scale-[1.03] active:scale-[0.97]
               after:content-[''] after:absolute after:inset-0 after:rounded-lg after:opacity-0
               after:transition-opacity after:duration-300 hover:after:opacity-100"
        :style="{
          background: btn.color,
          boxShadow: `0 0 10px 0 ${btn.color}55`,
        }"
      >
        {{ btn.text }}
      </button>

      <transition-group
        name="notif"
        tag="div"
        class="fixed bottom-5 right-5 flex flex-col gap-3 items-end"
      >
        <div
          v-for="(notif, i) in notifs"
          :key="notif.id"
          class="text-white hover:scale-110 duration-300 px-4 py-3 rounded-lg shadow-lg w-80 sm:w-96"
          :style="{ background: notif.color }"
        >
          <div class="flex justify-between">
            <span class="text-sm">Material Dashboard</span>
            <div class="flex items-center">
                <span class="text-sm text-[#3f3f3f]">11 mins ago</span>
                <button @click="removeToast(notif.id)" class="ml-3 cursor-pointer text-white duration-300 hover:scale-200">
                  <icons-x-icon class="w-4" />
                </button>
            </div>
          </div>
          <div class="w-full h-px bg-linear-to-r from-white/5 via-white to-white/5 my-5"></div>
          <div class="text-sm">
            Hello, world! This is a notification message.
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

useHead({ title: "Notification" });

const notifBoxs = reactive([
  { text: "A simple primary alert with an example link. Give it a click if you like.", color: "#E83975" },
  { text: "A simple secondary alert with an example link. Give it a click if you like.", color: "#6F7785" },
  { text: "A simple success alert with an example link. Give it a click if you like.", color: "#5FB562" },
  { text: "A simple danger alert with an example link. Give it a click if you like.", color: "#ED4C49" },
  { text: "A simple warning alert with an example link. Give it a click if you like.", color: "#FEA11E" },
  { text: "A simple info alert with an example link. Give it a click if you like.", color: "#419BF0" },
  { text: "A simple light alert with an example link. Give it a click if you like.", color: "#E6EAEF" },
  { text: "A simple dark alert with an example link. Give it a click if you like.", color: "#38383E" },
]);

const removeAlert = (index) => {
  notifBoxs.splice(index, 1);
};

const buttons = [
  { text: "Success", color: "#59B15D" },
  { text: "Info", color: "#3891EE" },
  { text: "Warning", color: "#FC950C" },
  { text: "Danger", color: "#EA4845" },
];

const notifs = ref([]);

const showNotif = (btn) => {
  const id = Date.now();
  notifs.value.push({
    id,
    text: `${btn.text} Notification`,
    color: btn.color,
  });

  setTimeout(() => {
    removeToast(id);
  }, 4000);
};

const removeToast = (id) => {
  const index = notifs.value.findIndex((n) => n.id === id);
  if (index !== -1) notifs.value.splice(index, 1);
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.notif-enter-active,
.notif-leave-active {
  transition: all 0.4s ease;
}
.notif-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.notif-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
