<template>
  <MainLayout>
    <BAlert v-if="successMessage" variant="success" dismissible="true">
      {{ successMessage }}
    </BAlert>
    <BAlert v-if="errorMessage" variant="danger" dismissible="true">
      {{ errorMessage }}
    </BAlert>

    <CreateOrderForm @submit="handleCreate" />
  </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from '@/elements/MainLayout.vue';
import CreateOrderForm from '@/forms/CreateOrderForm.vue';
import { BAlert } from 'bootstrap-vue-3';
import { createOrder } from '@/api/api';
import type { OrderFormData } from '@/types/form';

const route = useRoute();
const userId = Number(route.params.userId);

const successMessage = ref<string | null>(null);
const errorMessage = ref<string | null>(null);

const handleCreate = async (data: OrderFormData) => {
  successMessage.value = null;
  errorMessage.value = null;

  try {
    const response = await createOrder(userId, data);
    successMessage.value = `Order created successfully (ID: ${response.data.orderId})`;
  } catch (err: any) {
    errorMessage.value = 'Failed to create order';
  }
};
</script>
