<template>
  <div class="card mb-4">
    <div class="card-header">Create New Order</div>
    <div class="card-body">
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label class="form-label">Status</label>
          <select class="form-select" v-model="status" required>
            <option value="">-- Select Status --</option>
            <option v-for="s in ORDER_STATUS_OPTIONS" :key="s" :value="s">
              {{ s }}
            </option>
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label">Total ($)</label>
          <input
              type="number"
              step="0.01"
              min="0.01"
              class="form-control"
              required
              v-model.number="total"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Created At</label>
          <input
              type="datetime-local"
              class="form-control"
              required
              v-model="createdAt"
          />
        </div>

        <button type="submit" class="btn btn-primary">Create Order</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ORDER_STATUS_OPTIONS } from '@/constants/form-constants';
import type { OrderFormData } from '@/types/form';
import type { OrderStatus } from '@/types/order';

const emit = defineEmits<{
  (e: 'submit', data: OrderFormData): void;
}>();

const status = ref<OrderStatus | ''>('');
const total = ref<number | ''>('');
const createdAt = ref<string>('');

const handleSubmit = () => {
  if (!status.value || total.value === '' || isNaN(Number(total.value)) || !createdAt.value) {
    alert('Please fill in all required fields.');
    return;
  }

  const order: OrderFormData = {
    status: status.value,
    total: Number(total.value),
    createdAt: new Date(createdAt.value).toISOString(),
  };

  emit('submit', order);
};
</script>
