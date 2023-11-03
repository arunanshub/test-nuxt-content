<template>
  <Title v-if="data?.title">{{ data.title }}</Title>
  <main>
    <article
      class="prose prose-p:text-black max-w-prose mx-auto prose-pre:bg-transparent prose-pre:text-[unset]"
    >
      <LazyServerContentRenderer :value="data" v-if="data" />
    </article>
  </main>
</template>

<script setup lang="ts">
const path = useRoute().path;

const { data, error } = await useAsyncData(path, () => {
  return queryContent(path).only(["title", "body"]).findOne();
});

if (error.value || data.value?._empty) {
  throw createError({
    statusCode: 404,
    statusMessage: "The page you are looking for does not exist.",
  });
}
</script>
