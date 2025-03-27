<template>
  <div v-if="user && user.id" class="card mb-4">
    <div class="card-header">
      <h5 class="mb-0">User Details</h5>
    </div>
    <div class="card-body">
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useUserContext} from '@/composables/useUserContext';
import {computed} from "vue";

const {user} = useUserContext();
</script>
