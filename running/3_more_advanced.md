!SLIDE center black
# Even MORE advanced fun #

!SLIDE code
<pre class="sunburst"><span class="Comment"><span class="Comment">#</span> In $BEEHIVE_HOME/etc/beehive.conf</span>&#x000A;erlang_modules_dir: <span class="String"><span class="String">&quot;</span>/var/beehive/my_modules<span class="String">&quot;</span></span>&#x000A;event_handlers: <span class="String"><span class="String">&quot;</span>new_event_handler<span class="String">&quot;</span></span>&#x000A;&#x000A;<span class="Comment"><span class="Comment">#</span> Post</span>&#x000A;curl -i -XPOST -d<span class="String"><span class="String">&quot;</span>{<span class="Constant">\&quot;</span>token<span class="Constant">\&quot;</span>:<span class="Variable"><span class="Variable">$</span>TOKEN</span>}<span class="String">&quot;</span></span> <span class="Variable"><span class="Variable">$</span>HOST</span>/system/reload/system</pre>

!SLIDE code
<pre class="sunburst"><span class="Comment"><span class="Comment">#</span> Start one on node a</span>&#x000A;start_beehive -name alice&#x000A;&#x000A;<span class="Comment"><span class="Comment">#</span> Start one on node b</span>&#x000A;start_beehive -name bob -s alice&#x000A;&#x000A;<span class="Comment"><span class="Comment">#</span> Voila! And beehive will reconfigure itself automagically</span></pre>

