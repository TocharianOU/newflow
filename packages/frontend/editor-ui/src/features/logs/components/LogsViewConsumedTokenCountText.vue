<!--
  Modified by NewFlow Team
  Original work: Copyright (c) 2019-2024, Jan Oberhauser (n8n)
  Modified work: Copyright (c) 2024, NewFlow Team
  
  This file is part of NewFlow, a modified version of n8n.
  License: Sustainable Use License (see LICENSE.md)
-->

<script setup lang="ts">
import { useI18n } from '@newflow/i18n';
import { type LlmTokenUsageData } from '@/Interface';
import { formatTokenUsageCount } from '@/utils/aiUtils';
import { N8nTooltip } from '@newflow/design-system';

const { consumedTokens } = defineProps<{ consumedTokens: LlmTokenUsageData }>();
const locale = useI18n();
</script>

<template>
	<N8nTooltip v-if="consumedTokens !== undefined" :enterable="false">
		<span>{{
			locale.baseText('runData.aiContentBlock.tokens', {
				interpolate: {
					count: formatTokenUsageCount(consumedTokens, 'total'),
				},
			})
		}}</span>
		<template #content>
			<ConsumedTokensDetails :consumed-tokens="consumedTokens" />
		</template>
	</N8nTooltip>
</template>
