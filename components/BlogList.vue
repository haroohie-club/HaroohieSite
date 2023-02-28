<template>
    <ContentList path="/blog" v-slot="{ list }">
        <div class="year" v-for="year of new Set(list.filter(b => b.navigation).map(b => b.navigation.year).reverse())">
            <NuxtLink class="closed" @click.native="toggle(year)" :id="'link-' + year">{{ year }}</NuxtLink>
            <div class="month" :id="'div-' + year">
                <div v-for="month of new Set(list.filter(b => b.navigation).filter(b => b.navigation.year == year).map(b => b.navigation.month).reverse())">
                    <NuxtLink class="closed" @click.native="toggle(year + '-' + month)" :id="'link-' + year + '-' + month">
                        {{ getMonth(month) }}
                    </NuxtLink>
                    <div class="post" :id="'div-' + year + '-' + month">
                        <div v-for="blog of list.filter(b => b.navigation).filter(b => b.navigation.year === year && b.navigation.month === month).reverse()" class="blog-link">
                            <NuxtLink v-if="blog.navigation" :to="blog._path">{{ blog.title }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ContentList>
</template>

<style scoped>

.blog-link {
    margin-top: 10px;
    margin-bottom: 10px;
}

.closed, .open {
    color: black;
}
.closed:hover, .open:hover {
    text-decoration: none;
}
.open:before {
    content: "▼ ";
}
.closed:before {
    content: "▶ ";
}
.year {
    cursor: pointer;
}
.month {
    display: none;
    margin-left: 10px;
    cursor: pointer;
}
.month
.post {
    display: none;
    margin-left: 20px;
}

</style>

<script>
export default {
    methods: {
        toggle(ele) {
            var divElement = document.getElementById('div-' + ele);
            var linkElement = document.getElementById('link-' + ele)
            if (divElement.style.display == 'block') {
                divElement.style.display = 'none';
                linkElement.className = 'closed';
            } else {
                divElement.style.display = 'block';
                linkElement.className = 'open';
            }
        },
        getMonth(month) {
            switch (month) {
                case 1:
                    return "January";
                case 2:
                    return "February";
                case 3:
                    return "March";
                case 4:
                    return "April";
                case 5:
                    return "May";
                case 6:
                    return "June";
                case 7:
                    return "July";
                case 8:
                    return "August";
                case 9:
                    return "September";
                case 10:
                    return "October";
                case 11:
                    return "November";
                case 12:
                    return "December";
            }
        }
    }
}
</script>