<template>
    <div class="min-h-screen">
        <!-- Left Sidebar - Navigation (Fixed) -->
        <aside class="fixed left-0 top-0 h-screen w-48 px-1 z-10">
            <TheNavigation />
        </aside>
        
        <!-- Right Side - Page Content -->
        <main class="ml-48 p-6">
            <slot />
        </main>
    </div>
</template>