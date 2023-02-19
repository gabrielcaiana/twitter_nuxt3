<script setup lang="ts"></script>

<template>
  <div class="h-screen flex flex-col">
    <div
      class="p-2 my-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/50 transition-colors"
    >
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>

    <div class="mt-2 space-y-3">
      <SidebarLeftTab active>
        <template v-slot:icon>
          <Icon name="heroicons-solid:home" size="32" />
        </template>
        <template v-slot:name> Home </template>
      </SidebarLeftTab>

      <SidebarLeftTab :active="false">
        <template v-slot:icon>
          <Icon name="heroicons:hashtag" size="32" />
        </template>
        <template v-slot:name> Explore </template>
      </SidebarLeftTab>

      <SidebarLeftTab :active="false">
        <template v-slot:icon>
          <Icon name="heroicons:bell" size="32" />
        </template>
        <template v-slot:name> Notifications </template>
      </SidebarLeftTab>

      <SidebarLeftTab :active="false">
        <template v-slot:icon>
          <Icon name="heroicons:envelope" size="32" />
        </template>
        <template v-slot:name> Messages </template>
      </SidebarLeftTab>

      <SidebarLeftTab :active="false">
        <template v-slot:icon>
          <Icon name="heroicons:bookmark" size="32" />
        </template>
        <template v-slot:name> Bookmarks </template>
      </SidebarLeftTab>

      <SidebarLeftTab :active="false">
        <template v-slot:icon>
          <Icon name="heroicons:document-text" size="32" />
        </template>
        <template v-slot:name> Lists </template>
      </SidebarLeftTab>

      <SidebarLeftTab :active="false">
        <template v-slot:icon>
          <Icon name="heroicons:user" size="32" />
        </template>
        <template v-slot:name> Profile </template>
      </SidebarLeftTab>

      <SidebarLeftTab :active="false">
        <template v-slot:icon>
          <Icon name="heroicons:ellipsis-horizontal-circle" size="32" />
        </template>
        <template v-slot:name> More </template>
      </SidebarLeftTab>
    </div>
  </div>
</template>
