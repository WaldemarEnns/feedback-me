<template>
    <div class="min-h-screen grid grid-cols-[12rem_1fr]">
        <!-- Left Sidebar - Navigation -->
        <aside class="border-r border-gray-200 px-1">
            <TheNavigation />
        </aside>
        
        <!-- Right Side - Page Content -->
        <main class="p-6">
            <slot />
        </main>
    </div>
</template>