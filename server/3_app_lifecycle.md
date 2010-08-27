!SLIDE center incremental bullets
# Bundle (into a bee) #

 * Bundle the application into a single file
 * Setup dependencies
 * Compress

!SLIDE center incremental bullets
# Mount #

 * Turn the 'bee' into executable code
 * Setup runnable environment

!SLIDE center incremental bullets
# Start #

 * Setup application logging
 * Start the bee based on type of application

!SLIDE center incremental bullets
# Stop #
 
 * Terminate the running bee

!SLIDE center incremental bullets
# Unmount #

 * Unmount the bee (iso vs. tar)

!SLIDE code
<pre class="sunburst"><span class="Comment"><span class="Comment">#</span>!/bin/sh -e</span>&#x000A;&#x000A;echo <span class="String"><span class="String">&quot;</span>Checking for a config.ru<span class="String">&quot;</span></span>&#x000A;<span class="Keyword">if</span> [ <span class="Keyword">!</span> -f <span class="String"><span class="String">&quot;</span>config.ru<span class="String">&quot;</span></span> ]<span class="Keyword">;</span> <span class="Keyword">then</span>&#x000A;  echo <span class="String"><span class="String">&quot;</span>Invalid rack app<span class="String">&quot;</span></span>&#x000A;  exit 127&#x000A;<span class="Keyword">fi</span>&#x000A;&#x000A;<span class="Comment"><span class="Comment">#</span> If there is an isolate file, run Isolate.now!</span>&#x000A;<span class="Keyword">if</span> [ -f <span class="String"><span class="String">&quot;</span>Isolate<span class="String">&quot;</span></span> ]<span class="Keyword">;</span> <span class="Keyword">then</span>&#x000A;  ruby -rubygems -e \&#x000A;    <span class="String"><span class="String">'</span>require &quot;isolate&quot;; Isolate.now!<span class="String">'</span></span>&#x000A;<span class="Keyword">fi</span>&#x000A;&#x000A;<span class="Comment"><span class="Comment">#</span> If .gems file exists</span>&#x000A;<span class="Keyword">if</span> [ -f <span class="String"><span class="String">&quot;</span>.gems<span class="String">&quot;</span></span> ]<span class="Keyword">;</span> <span class="Keyword">then</span>&#x000A;  <span class="Keyword">while</span> read line<span class="Keyword">;</span> <span class="Keyword">do</span>&#x000A;      eval <span class="String"><span class="String">&quot;</span>gem install --no-rdoc --no-ri <span class="Variable"><span class="Variable">$</span>line</span><span class="String">&quot;</span></span>&#x000A;  <span class="Keyword">done</span> <span class="Keyword">&lt;</span> <span class="String"><span class="String">&quot;</span>.gems<span class="String">&quot;</span></span>&#x000A;<span class="Keyword">fi</span>&#x000A;<span class="Comment"><span class="Comment">#</span> more...</span></pre>
