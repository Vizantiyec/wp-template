<!--SIDEBAR-->
<aside class="sidebar">
	<?php if (!dynamic_sidebar('sidebar')): ?>
		<h3>sidebar :)</h3>
	<?php endif; ?>
	<div class="widget widget-pic widget-testimonials hidden-xs hidden-sm">
		<h3 class="widget-title">Testimonials</h3>
		<div class="widget-text">
			<img src="<?php bloginfo('template_url'); ?>/img/testimonials-1.png" alt="" />
			<br/>
			<img src="<?php bloginfo('template_url'); ?>/img/testimonials-2.png" alt="" />
		</div>
	</div>
</aside>