<template>
    <div id="overlay">
        <div class="container">
            <router-link to="/">Strona Główna</router-link>
            <router-link to="/oferta">Oferta</router-link>
            <router-link to="/cennik">Cennik</router-link>
            <router-link to="/faq">FAQ</router-link>
            <router-link to="/kontakt">Kontakt</router-link>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const topMenu = document.querySelector(".top-menu");
        const mobileNav = document.querySelector(".mobile-nav");
        const overlay = document.getElementById("overlay");
        let trigger;
        let el = document.querySelectorAll(".mobile-nav>div");
        let mobile = document.querySelector(".mobile-nav span");
        let linksList = document.querySelectorAll("#overlay a");
        let linksOverlay = document.querySelectorAll("#overlay a");
        overlay.style.display = "none";
        // on click mobile menu icon
        mobile.addEventListener("click", () => {
            handlingMobileNavigation();
        });
        overlay.addEventListener("click", () => {
            handlingMobileNavigation();
        });
        linksOverlay.forEach(link => {
            link.addEventListener("click", () => {
                handlingMobileNavigation();
            });
        });
        let hideOverlayHandler = () => {
            setTimeout(() => {
                document.getElementById("overlay").style.display = "none";
            }, 1200);
            setTimeout(() => {
                this.$anime({
                    targets: "#overlay",
                    width: "0vw",
                    duration: 1000,
                    easing: "easeOutExpo"
                });
                trigger = false;
            }, 600);
            this.$anime({
                targets: linksList,
                opacity: [1, 0],
                translateX: [0, -50],
                easing: "easeOutExpo",
                delay: this.$anime.stagger(100, { direction: "reverse" })
            });
        };
        let handlingMobileNavigation = () => {
            if (document.getElementById("overlay").style.display === "none") {
                trigger = false;
            } else {
                trigger = true;
            }
            // animation logo
            this.$anime.timeline().add({
                targets: ".logo",
                rotateY: ["0deg", "90deg"],
                easing: "easeOutExpo",
                delay: trigger ? 580 : 550,
                duration: 300
            }).add({
                targets: ".logo",
                rotateY: ["90deg", "0deg"],
                easing: "easeOutExpo",
                delay: trigger ? 0 : 0,
                duration: 300
            });
              // animation mobile menu icon
            mobile.style.pointerEvents = "none";
            this.$anime.timeline().add({
                targets: el,
                width: ["40px", "0px"],
                marginRight: ["16%", "0%"],
                duration: 600,
                easing: "easeOutExpo",
                delay: this.$anime.stagger(100)
            }).add({
                targets: el,
                width: ["0px", "40px"],
                marginRight: "16%",
                backgroundColor: trigger ? "rgb(0,0,0)" : "rgb(255, 255, 255)",
                duration: 600,
                easing: "easeOutExpo",
                delay: this.$anime.stagger(100, { direction: "reverse" })
            });
            setTimeout(() => {
                mobile.style.pointerEvents = "auto";
            }, 1200);
            // overlay animation show
            if (trigger === false) {
                // show block and links
                overlay.style.display = "unset";
                setTimeout(() => {
                    trigger = true;
                    this.$anime({
                        targets: "#overlay",
                        width: "100vw",
                        duration: 1000,
                        easing: "easeOutExpo"
                    });
                    setTimeout(() => {
                        this.$anime({
                            targets: linksList,
                            opacity: [0, 1],
                            translateX: [-50, 0],
                            easing: "easeOutExpo",
                            delay: this.$anime.stagger(100)
                        });
                    }, 400);
                }, 400);
              // hover overlay links
                linksList.forEach(link => {
                    link.addEventListener("mouseover", () => {
                        this.$anime({
                            targets: link,
                            color: "rgb(255,0,0)",
                            easing: "easeOutExpo",
                            duration: 300
                        });
                    });
                    link.addEventListener("mouseleave", () => {
                        this.$anime({
                            targets: link,
                            color: "rgb(255,255,255)",
                            easing: "easeOutExpo",
                            duration: 300
                        });
                    });
                });
            } else {
                // hide block and links
                hideOverlayHandler();
            }
        };

        // toggle menu depends on window width
        const toggleMenu = () => {
            this.$anime({
                targets: window.innerWidth > 900 ? topMenu : mobileNav,
                opacity: 1,
                duration: 600,
                easing: "linear"
            });
        };
        toggleMenu();
        function onScreenResize() {
            if (window.innerWidth > 900) {
                topMenu.style.display = "";
                mobileNav.style.display = "none";
                mobileNav.style.opacity = 0;
            } else {
                mobileNav.style.display = "";
                mobileNav.querySelectorAll("div").forEach(item => {
                    item.style.backgroundColor = "black";
                });
                topMenu.style.display = "none";
                topMenu.style.opacity = 0;
            }
        }
        onScreenResize();
        window.addEventListener("resize", () => {
            onScreenResize();
            toggleMenu();
            // hide overlay when window screen is more than 900px
            if (window.innerWidth > 900) {
                hideOverlayHandler();
            }
        });
    }
};
</script>

<style lang="scss" scoped>
$transparent-black: rgba(0, 0, 0, 0.8);
#overlay {
  position: fixed;
  top: 0px;
  right: 0px;
  width: 0px;
  height: 100vh;
  display: none;
  z-index: 10;
  background-color: $transparent-black;

  & > div {
    margin-top: 100px;

    a {
      display: block;
      text-align: center;
      color: white;
      text-decoration: none;
      font-size: calc(18px + 1vw) !important;
      opacity: 0;
      line-height: 100px;
    }
  }
}
</style>