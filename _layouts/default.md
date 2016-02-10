<!doctype html>
<html>
{% include head.html %}
<body>
    <div class="container jumbotron">
        <h1 class="text-center"><i class="fa fa-paper-plane float shadow"></i> Flyaway<a href="">.css</a></h1>
        <p class="lead text-right">~ created by <small><a href="http://takentech.com/about"><i class="glyphicon glyphicon-fire"></i> 進擊的燊</a></small> ~</p>
        <ul class="list-inline text-center">
            <li>
                <iframe class="github-btn" src="https://ghbtns.com/github-btn.html?user=lushen&amp;repo=flyaway&amp;type=watch&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="100px" height="20px"></iframe>
            </li>
            <li>
                <iframe class="github-btn" src="https://ghbtns.com/github-btn.html?user=lushen&amp;repo=flyaway&amp;type=fork&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="102px" height="20px"></iframe>
            </li>
        </ul>
        {{ content }}
        <br>
        <section class="center-block">
            <button class="download" onClick="window.location='https://github.com/lushen/flyaway/archive/v0.0.2.zip'; return false;">
                <span>Download</span>
                <i class="fa fa-paper-plane"></i>
            </button>
            <small class="center-block text-center">Currently v0.0.2</small>
        </section>
        <br>
        <br>
        <section class="text-center block">
            <ul class="social list-inline">
                <li>
                    <i id="demo" class="fa fa-paper-plane fa-3x float shadow"></i>
                </li>
            </ul>
        </section>
        <section class="text-center block">
            <select class="select">
                <optgroup label="Flyout">
                    <option value="pushOut">pushOut</option>
                    <option value="popUp">popUp</option>
                </optgroup>
                <optgroup label="Shake">
                    <option value="linearShake">linearShake</option>
                    <option value="rotateShake">rotateShake</option>
                </optgroup>
            </select>
            <button class="animate">Animate</button>
        </section>
        {% include footer.html %}
    </div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="http://apps.bdimg.com/libs/jquery/2.0.0/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="http://apps.bdimg.com/libs/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/back-to-top.js"></script>
    <script type="text/javascript" src="js/flyaway.js"></script>
</body>

</html>
