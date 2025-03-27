<template>
  <MainLayout>
    <div v-if="!userId || isNaN(userId)">
      <p class="text-danger">Invalid user ID</p>
    </div>
    <div v-else>
      <UserDataProvider :user-id="userId">
        <UserDetail />
      </UserDataProvider>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import MainLayout from '@/elements/MainLayout.vue';
import UserDataProvider from '@/providers/UserProvider.vue';
import UserDetail from '@/components/UserDetail.vue';

const route = useRoute();
const userId = parseInt(route.params.userId as string, 10);
</script>
