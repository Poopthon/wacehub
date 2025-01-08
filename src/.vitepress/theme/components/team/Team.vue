<template>
  <div class="team-container">
    <h1 class="title">Our Team</h1>
    <div class="team-grid">
      <TeamMember v-for="member in teamMembers" :key="member.name" :member="member" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import TeamMember from './teammember.vue';
import teamMembersData from './teamMembers.json';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export default defineComponent({
  name: 'Team',
  components: {
    TeamMember
  },
  setup() {
    const teamMembers = ref<TeamMember[]>([]);

    onMounted(() => {
      teamMembers.value = teamMembersData;
    });

    return {
      teamMembers
    };
  }
});
</script>

<style scoped>
.team-container {
  background: var(--background-color); /* Matches the site's default */
  padding: 40px;
  border-radius: 12px;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--primary-color); /* Update to match the site theme */
  margin-bottom: 30px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

h1 {
  margin-bottom: 20px;
}
</style>
