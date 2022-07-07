<template>
    <section class="section main-banner" id="top" data-section="section1">
        <div class="bg-image"></div>
        <!-- <video autoplay muted loop id="bg-video">
            <source src="../assets/images/course-video.mp4" type="video/mp4" />
        </video> -->

        <div class="video-overlay header-text">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="jumbotron jumbotron-fluid mb-5">
                            <div class="container text-center py-5">
                                <h1 class="text-danger mb-4">ANC Studios</h1>
                                <h1 class="text-white display-3 mb-5">ตรวจสอบรางวัล</h1>
                                <form @submit.prevent="onSearch">
                                    <div class="mx-auto" style="width: 100%; max-width: 600px;">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Code" v-model="code">
                                            <div class="input-group-append">
                                                <button class="btn btn-danger">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>
</template>

<script>
import Swal from "sweetalert2";
import { ref } from 'vue';
import drawersColRef from '@/firebase';
import { doc, getDoc } from '@firebase/firestore';

// // const drawers = ref([]);

// onMounted(() => {
//     console.log('mounted');
// })

export default {
    name: "HomeItem",
    setup() {
        const code = ref("");

        // onMounted(async () => {
        //     const querySnapShot = await getDocs(drawersColRef);
        //     querySnapShot.forEach((drawer) => {
        //         console.log(drawer.id, drawer.data());
        //     })
        // });

        const onSearch = async () => {
            if (code.value == '') {
                Swal.fire(
                    "กรุณากรอก Code ด้วย",
                    "",
                    "error"
                );
                return false;
            }
            try {
                const drawerRef = doc(drawersColRef, code.value);
                const drawer = await getDoc(drawerRef);
                // console.log(drawerRef, drawer.data().link);
                if (drawer.exists()) {
                    window.location.href = drawer.data().link;
                } else {
                    Swal.fire(
                        "Code ไม่ถูกต้อง!!!",
                        "กรุณาลองอีกครั้ง",
                        "error"
                    );
                }
            } catch (error) {
                Swal.fire(
                    JSON.stringify(error.response.data.message),
                    "Try again",
                    "error"
                );
            }
        };

        return {code, onSearch};
    }
};
</script>