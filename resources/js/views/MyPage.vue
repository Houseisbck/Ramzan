<template>
    <body>
    
    <section class="main mt-5">
        <div class="container d-flex justify-content-between">
            <div class="main__friendlist col-4">
                <div class="friendlist-title mb-2 ml-5">Друзья: 6</div>
                <div class="friendlist-roster">
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
                        <input id="postFormText" type="submit">
                        <label class="post__form-submit col-12 justify-content-center p-0 d-flex"
                            for="postFormSubmit">Опубликовать</label>
                    </div>
                </form>
                <div class="main__post-note mt-2">
                    <div class="post__note-title d-flex justify-content-start pl-3 pr-3 mb-2 mt-1">Название поста</div>
                    
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
</body>
</template>