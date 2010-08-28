!SLIDE center black
# Even MORE advanced fun #

!SLIDE center black
# Add custom `erlang` event handler

!SLIDE code
<pre class="sunburst"><span class="Comment"><span class="Comment">#</span> In $BEEHIVE_HOME/etc/beehive.conf</span>&#x000A;erlang_modules_dir: <span class="String"><span class="String">&quot;</span>/var/beehive/my_modules<span class="String">&quot;</span></span>&#x000A;event_handlers: <span class="String"><span class="String">&quot;</span>new_event_handler<span class="String">&quot;</span></span>&#x000A;&#x000A;<span class="Comment"><span class="Comment">#</span> Post</span>&#x000A;curl -i -XPOST -d<span class="String"><span class="String">&quot;</span>{<span class="Constant">\&quot;</span>token<span class="Constant">\&quot;</span>:<span class="Variable"><span class="Variable">$</span>TOKEN</span>}<span class="String">&quot;</span></span> <span class="Variable"><span class="Variable">$</span>HOST</span>/system/reload/system</pre>

!SLIDE center black
# Distributed beehive #

!SLIDE code
<pre class="sunburst"><span class="Comment"><span class="Comment">#</span> Start one on node a</span>&#x000A;start_beehive -name alice&#x000A;&#x000A;<span class="Comment"><span class="Comment">#</span> Start one on node b</span>&#x000A;start_beehive -name bob -s alice&#x000A;&#x000A;<span class="Comment"><span class="Comment">#</span> Voila! And beehive will reconfigure and balance itself automagically</span></pre>

!SLIDE center black
# Change how bees are chosen #

!SLIDE code
<pre class="sunburst"><span class="Comment"><span class="Comment">#</span> How about change the strategy how bees are chosen</span>&#x000A;<span class="Comment"><span class="Comment">#</span> random and least_loaded are built-in</span>&#x000A;<span class="Comment"><span class="Comment">#</span> Use the -g switch the change to least_loaded by default</span>&#x000A;start_beehive -name alice -g least_loaded</pre>

!SLIDE center black
# Change how the hostname is looked up #

!SLIDE code
<pre class="sunburst"><span class="Comment"><span class="Comment">#</span> What about changing how the bees are chosen</span>&#x000A;<span class="Comment"><span class="Comment">#</span> Currently, they are chosen on the 'Host' header</span>&#x000A;<span class="Comment"><span class="Comment">#</span> in the HTTP request, but this can be modified</span>&#x000A;<span class="Comment"><span class="Comment">#</span> using the -r switch</span>&#x000A;start_beehive -n alice -r <span class="String"><span class="String">'</span>User-Agent<span class="String">'</span></span></pre>

!SLIDE center black
# More help #

!SLIDE code
<pre class="sunburst"><span class="Comment"><span class="Comment">#</span> For more help, use the -h command on</span>&#x000A;<span class="Comment"><span class="Comment">#</span> all the binaries</span>&#x000A;<span class="Comment"><span class="Comment">#</span> i.e.</span>&#x000A;start_beehive -h&#x000A;queen -h</pre>

