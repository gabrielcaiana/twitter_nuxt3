<script setup lang="ts">
interface WhatsHappengItem {
  title: string;
  count: string;
}

interface whoToFollowItems {
  name: string;
  handle: string;
  image: string;
}

const whatsHappeingItems = ref<WhatsHappengItem[]>([
  {
    title: 'Space X',
    count: '18.8K Tweets',
  },
  {
    title: '#CodingIsFun',
    count: '18.8K Tweets',
  },
  {
    title: '#artforall',
    count: '2.4K Tweets',
  },
]);

const whoToFollowItems = ref<whoToFollowItems[]>([
  {
    name: '@gabriel_caiana',
    handle: 'Gabriel Caiana',
    image:
      'https://pbs.twimg.com/profile_images/1604176422343479299/lHZfqm1H_400x400.jpg',
  },
  {
    name: 'Elon Musk',
    handle: '@elonmusk',
    image:
      'https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg',
  },
  {
    name: 'Donald J. Trump',
    handle: '@realDonaldTrump',
    image:
      'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg',
  },
]);
</script>

<template>
  <div class="flex flex-col">
    <!-- Preview card: what`s  happening -->
    <div>
      <SidebarRightPreviewCard title="What`s  happening">
        <SidebarRightPreviewCardItem
          v-for="{ title, count } in whatsHappeingItems"
          :key="title"
        >
          <span class="block font-bold text-gray-800 text-md dark:text-white">{{
            title
          }}</span>
          <p class="text-xs text-gray-400">{{ count }}</p>
        </SidebarRightPreviewCardItem>
      </SidebarRightPreviewCard>
    </div>

    <!-- Preview card: Who to follow -->
    <div>
      <SidebarRightPreviewCard title="Who to follow">
        <SidebarRightPreviewCardItem
          v-for="{ name, handle, image } in whoToFollowItems"
          :key="handle"
        >
          <div class="flex flex-row justify-between p-2">
            <div class="flex flex-row gap-2 items-center">
              <img class="w-10 h-10 rounded-full" :src="image" :alt="name" />
              <div clas="flex flex-col">
                <span class="text-sm font-bold text-gray-900 dark:text-white">{{
                  name
                }}</span>
                <p class="text-xs text-gray-400">{{ handle }}</p>
              </div>
            </div>
            <div class="flex h-full">
              <button
                class="px-4 py-2 font-bold text-xs text-white bg-black hover:bg-dim-200 dark:text-black dark:bg-white dark:hover:bg-gray-200 rounded-full transition-colors"
              >
                Follow
              </button>
            </div>
          </div>
        </SidebarRightPreviewCardItem>
      </SidebarRightPreviewCard>
    </div>
  </div>
</template>
