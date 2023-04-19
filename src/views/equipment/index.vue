<template>
  <div class="pb-4 flex">
    <el-input
      placeholder="Name equipment"
      @keyup.enter="appEquipment(inputName)"
      v-model="inputName"
    ></el-input>
    <el-icon class="mx-4" :size="35" @click="appEquipment(inputName)"
      ><CirclePlusFilled
    /></el-icon>
  </div>
  <el-row v-loading="isLoading" :gutter="20">
    <el-col
      v-for="(equipment, index) in listEquipment"
      :key="index"
      :span="6"
      class="mb-5"
    >
      <div>
        <Equipment @onLoad="onLoad" :equipment="equipment" />
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { getList, addNew } from "../../api/equipment";
import { state, socket } from "../../socket/index";

const listEquipment = ref([]);
const inputName = ref("");
const isLoading = ref(false);
//call API
async function listAPI() {
  try {
    isLoading.value = true;
    const {
      data: { data },
    } = await getList();
    if (data?.length) {
      listEquipment.value = data;
    }
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}
// On Mounted
onMounted(async () => {
  await listAPI();
  socket.connect();
});
// Feature
function onLoad(data: any) {}
async function appEquipment(name: string) {
  try {
    const data = await addNew({ name: name });
    console.log(data);
    inputName.value = "";
  } catch (error) {
    console.log(error);
  }
}

socket.on("onEvents", (data: any) => {
  listEquipment.value = data.data;
  console.log("Received data from server:", data);
});

// function updateDate(value: any) {
//   // socket.emit("events", value);
// }

onUnmounted(() => {
  socket.disconnect();
});
</script>
