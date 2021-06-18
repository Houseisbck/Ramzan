<<template>
    <div>
        <div class="d-flex justify-content-around col-12">
            <div class="header__center col-5">
                <div class="header__center-image d-flex align-items-center">
                    <img class="image-block col-9" src="../assets/images/софа.jpg" alt="">
                    <div class="header__center-group__input">
                        <input id="headerSearchImage" type="file">
                        <label for="headerSearchImage"></label>
                    </div>
                </div>
            </div>
            <div class="header__right-side__panel col-4">
                <div class="right-side__panel-sticks">
                    <div class="panel__stick-first"></div>
                    <div class="panel__stick-second"></div>
                </div>
                <div class="right-side__title">Информация о пользователе</div>
                <div class="right-side__descr">
                    <ul>
                        <li>Имя: Вбивця</li>
                        <li>День рождения: 2005</li>
                        <li>Город: Украина</li>
                        <li>Языки: Славянский</li>
                    </ul>
                </div>
            </div>
        </div>
        <section class="main mt-5">
            <div class="container d-flex justify-content-around p-0 col-12">
                <div class="col-5 d-flex align-items-center justify-content-center">
                    <div class="col-9 main__friendlist d-flex justify-content-center flex-column">
                        <div class="friendlist-title mb-2">Друзья: 6</div>
                        <div class="friendlist-roster">
                            <ul class="d-flex flex-column col-12 p-3 m-0">
                                <div class="freindlist-roster__group mb-2 d-flex">
                                    <li><a href="#" class="d-flex flex-column align-items-center">
                                        <img class="friendlist__roster-image col-9"
                                             src="../assets/images/avatar-friends-image/xnofTuG-kPg.jpg">
                                        <div class="friendlist__roster-username">Олег</div>
                                    </a></li>
                                    <li><a href="#" class="d-flex flex-column align-items-center">
                                        <img class="friendlist__roster-image col-9"
                                             src="../assets/images/avatar-friends-image/xnofTuG-kPg.jpg">
                                        <div class="friendlist__roster-username">Олег</div>
                                    </a></li>
                                    <li><a href="#" class="d-flex flex-column align-items-center">
                                        <img class="friendlist__roster-image col-9"
                                             src="../assets/images/avatar-friends-image/xnofTuG-kPg.jpg">
                                        <div class="friendlist__roster-username">Олег</div>
                                    </a></li>
                                </div>
                                <div class="freindlist-roster__group d-flex mt-2">
                                    <li><a href="#" class="d-flex flex-column align-items-center">
                                        <img class="friendlist__roster-image col-9"
                                             src="../assets/images/avatar-friends-image/xnofTuG-kPg.jpg">
                                        <div class="friendlist__roster-username">Олег</div>
                                    </a></li>
                                    <li><a href="#" class="d-flex flex-column align-items-center">
                                        <img class="friendlist__roster-image col-9"
                                             src="../assets/images/avatar-friends-image/xnofTuG-kPg.jpg">
                                        <div class="friendlist__roster-username">Олег</div>
                                    </a></li>
                                    <li><a href="#" class="d-flex flex-column align-items-center">
                                        <img class="friendlist__roster-image col-9"
                                             src="../assets/images/avatar-friends-image/xnofTuG-kPg.jpg">
                                        <div class="friendlist__roster-username">Олег</div>
                                    </a></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="main__post-group d-flex flex-column h-25 p-0 col-4">
                    <form action="" class="main__post-form col-12 p-0">
                        <div class="col-12 d-flex justify-content-end align-items-center flex-column">
                            <input id="postFormFile" type="file">
                            <label class="post__form-file d-flex col-12 justify-content-end p-0" for="postFormFile">
                                <div></div>
                            </label>
                            <input class="post__form-text col-12 d-flex pr-4 pl-2" type="text">
                            <ul class="post__form-attach__files">
                                <li></li>
                            </ul>
                            <input id="postFormSubmit" type="submit">
                            <label class="post__form-submit col-12 justify-content-center p-0 d-flex"
                                   for="postFormSubmit">Опубликовать</label>
                        </div>
                    </form>
                    <div class="main__post-note mt-2">
                        <div class="post__note-title d-flex justify-content-start pl-3 pr-3 m-1">Название поста</div>
                        <img class="post__note-image col-12 mb-3"
                             src="../assets/images/orig-16151963622a8b73d4077d7ea242993e1665322891.jpeg" alt="">
                        <div class="post__note-footer pt-1 pb-1 d-flex col-12 justify-content-around mb-2">
                            <div class="note__footer-edit"></div>
                            <div class="note-group__active d-flex justify-content-between col-4">
                                <div class="footer-note__like-group d-flex">
                                    <div class="note__footer-like"></div>
                                    <div class="note__footer-like__number ml-1">12</div>
                                </div>
                                <div class="note__footer-repost"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/style-my-page";
</style>

<script>
export default {
    name: 'mypage'
}
</script>
