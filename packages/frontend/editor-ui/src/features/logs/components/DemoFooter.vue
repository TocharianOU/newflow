<!--
  Modified by NewFlow Team
  Original work: Copyright (c) 2019-2024, Jan Oberhauser (n8n)
  Modified work: Copyright (c) 2024, NewFlow Team
  
  This file is part of NewFlow, a modified version of n8n.
  License: Sustainable Use License (see LICENSE.md)
-->

<script setup lang="ts">
import LogsPanel from '@/features/logs/components/LogsPanel.vue';
import { useWorkflowsStore } from '@/stores/workflows.store';
import { computed } from 'vue';

const workflowsStore = useWorkflowsStore();
const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
</script>

<template>
	<LogsPanel v-if="hasExecutionData" :is-read-only="true" />
</template>
