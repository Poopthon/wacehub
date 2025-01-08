<template>
  <div class="team-member">
    <img v-if="member.avatar" :src="member.avatar" :alt="member.name" class="avatar" />
    <div class="info">
      <h2 class="name">{{ member.name }}</h2>
      <p class="role">{{ member.role }}</p>
      <p class="bio">{{ member.bio }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
}

export default defineComponent({
  name: 'TeamMember',
  props: {
    member: {
      type: Object as PropType<TeamMember>,
      required: true
    }
  }
});
</script>

<style scoped>
.team-member {
  margin-top: 10px;
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
}

.team-member:hover {
  transform: scale(1.05);
  background-color: #f8f9fa;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.name {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 10px 0;
  color: #333;
}

.role {
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: #777;
  margin-bottom: 5px;
}

.bio {
  font-size: 0.875rem;
  color: #555;
  text-align: center;
  line-height: 1.4;
}
</style>
