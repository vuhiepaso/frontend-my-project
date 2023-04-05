<template>
  <el-row :gutter="20">
    <el-col
      v-for="(equipment, index) in listEquipment"
      :key="index"
      :span="6"
      class="mb-5"
    >
      <div style="height: 150px">
        <Equipment @onRemove="onRemove" :equipment="equipment" />
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { getList } from "../../api/equipment";

const listEquipment = ref([]);
//call API
async function listAPI() {
  try {
    const {
      data: { data },
    } = await getList();
    if (data.length) {
      listEquipment.value = data;
    }
  } catch (error) {
    console.error(error);
  }
}
// On Mounted
onMounted(async () => {
  await listAPI();
});
// Feature
function onRemove(data: any) {
  listAPI();
}
</script>
