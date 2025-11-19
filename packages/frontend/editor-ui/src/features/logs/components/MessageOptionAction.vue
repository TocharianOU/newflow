<!--
  Modified by NewFlow Team
  Original work: Copyright (c) 2019-2024, Jan Oberhauser (n8n)
  Modified work: Copyright (c) 2024, NewFlow Team
  
  This file is part of NewFlow, a modified version of n8n.
  License: Sustainable Use License (see LICENSE.md)
-->

<script setup lang="ts">
import { useAttrs } from 'vue';
import { type IconName } from '@newflow/design-system/src/components/N8nIcon/icons';

defineProps<{ label: string; icon: IconName; placement: 'left' | 'right' | 'top' | 'bottom' }>();

const attrs = useAttrs();

const onClick = () => {
	// @ts-expect-error Attrs onClick is not typed
	attrs.onClick?.();
};
</script>

<template>
	<div :class="$style.container">
		<n8n-tooltip :placement="placement">
			<template #content>
				{{ label }}
			</template>
			<n8n-icon :class="$style.icon" :icon="icon" size="xsmall" @click="onClick" />
		</n8n-tooltip>
	</div>
</template>

<style lang="scss" module>
.container {
	display: inline-flex;
	align-items: center;
	margin: 0 var(--spacing-4xs);
}

.icon {
	color: var(--color-foreground-dark);
	cursor: pointer;

	&:hover {
		color: var(--color-primary);
	}
}
</style>
