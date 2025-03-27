<template>
  <div>
    <h4 class="mb-3">Orders</h4>

    <FetchStateHandler :status="status" :message="message" no-data-message="No orders found.">
      <table class="table table-striped table-bordered table-hover table-responsive">
        <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Total</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.status }}</td>
          <td>${{ order.total.toFixed(2) }}</td>
          <td>{{ new Date(order.createdAt).toLocaleDateString() }}</td>
        </tr>
        </tbody>
      </table>

      <PaginationControls
          v-if="pagination"
          :pagination="pagination"
          :page="page"
          :set-page="setPage"
      />
    </FetchStateHandler>
  </div>
</template>

<script setup lang="ts">
import { useUserOrdersContext } from '@/composables/useUserOrdersContext';
import PaginationControls from '@/components/PaginationControls.vue';
import FetchStateHandler from '@/components/FetchStateHandler.vue';
import type { Order } from '@/types/order';


const { orders, status, message, pagination, page, setPage } = useUserOrdersContext();
</script>
