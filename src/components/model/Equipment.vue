<template>
  <div class="container-item">
    <div class="box-item">
      <div class="box-equipment e-tool text-end flex items-center justify-end">
        <el-popconfirm
          title="Are you sure to delete this?"
          @cancel="isCaret = false"
          @confirm="onRemove()"
        >
          <template #reference>
            <el-icon class="cursor-pointer" color="red" :size="23"
              ><Delete />
            </el-icon>
          </template>
        </el-popconfirm>
      </div>
      <div
        class="box-equipment e-view"
        :style="`right: ${isCaret ? '50px' : '0'};
  border: 5px solid ${equipment.status ? 'chartreuse' : 'grey'}`"
      >
        <div class="flex items-center">
          <el-switch
            v-model="equipment.status"
            @change="onchange(equipment.status)"
          />
        </div>

        <div class="text-2xl" v-if="isActivityEdit">
          <span>{{ equipment.name }}</span>

          <el-icon
            v-role
            :size="16"
            @click="isActivityEdit = false"
            class="cursor-pointer"
            ><EditPen
          /></el-icon>
        </div>
        <div v-else class="flex items-center mt-3">
          <el-input
            v-model="input"
            placeholder="Name"
            class="h-7 text-center"
            @keyup.enter="updateName(input)"
          />
          <el-icon
            class="cursor-pointer"
            color="green"
            @click="updateName(input)"
            ><CircleCheck
          /></el-icon>
          <el-icon
            color="red"
            class="cursor-pointer"
            @click="(isActivityEdit = true), (input = equipment.name)"
            ><CircleClose
          /></el-icon>
        </div>
        <div class="box-code">code: {{ equipment.id }}</div>
        <el-icon
          v-role
          @click="isCaret = !isCaret"
          class="caret-lef cursor-pointer"
          :size="16"
        >
          <CaretLeft v-if="!isCaret" />
          <CaretRight v-else />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";
import { remove, update } from "../../api/equipment";
import { ElMessage } from "element-plus";
const emit = defineEmits(["onLoad"]);
const props = defineProps({
  equipment: {
    default: {
      name: "name",
      id: 1,
      status: false,
    },
  },
});
const value = ref(props.equipment.status);
const input = ref(props.equipment.name);
const isActivityEdit = ref(true);
const isCaret = ref(false);

async function updateName(value: string) {
  const { id } = props.equipment;
  try {
    await update(id, { name: value });
    isActivityEdit.value = true;
    emit("onLoad", { id });
  } catch (error) {
    ElMessage.error("Change status fail !");
    console.error(error);
  }
}
async function onchange(value: any) {
  const { id } = props.equipment;
  try {
    await update(id, { status: value });
  } catch (error) {
    emit("onLoad", { id });
    ElMessage.error("Change status fail !");
    console.error(error);
  }
}
async function onRemove() {
  const { id } = props.equipment;
  try {
    await remove(id);
    isCaret.value = false;
    emit("onLoad", { id });
    ElMessage({
      message: "Remove successfully !",
      type: "success",
    });
  } catch (error) {
    console.error(error);
    ElMessage.error("Remove fail !");
  }
}
</script>

<style scoped>
.container-item {
  height: 150px;
}
.box-item {
  position: fixed;
}
.box-code {
  position: absolute;
  bottom: 8px;
  right: 5px;
  font-weight: 500;
  font-size: 12px;
}
.caret-lef {
  top: 46%;
  right: 0;
  position: absolute;
}
.box-equipment {
  padding: 15px;
  width: 230px;
  height: 150px;
  border-radius: 20px;
}
.e-tool {
  border: 5px solid red;
}
.e-view {
  background-color: white;
  position: absolute;
  top: 0;
  /* right: v-bind('isCaret? "50px": "0"');
  border: 5px solid v-bind('value? "chartreuse": "grey"'); */
}
</style>
