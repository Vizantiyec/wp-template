<!--SIDEBAR-->
<aside class="site_sidebar">
	<?php if (!dynamic_sidebar('sidebar')): ?>
		<h3>sidebar :)</h3>
	<?php endif; ?>
	<div class="site_widget site_widget-pic site_widget-testimonials hidden-xs hidden-sm">
		<h3 class="site_widget-title">Testimonials</h3>
		<div class="site_widget-text">
			<img src="<?php bloginfo('template_url'); ?>/img/testimonials-1.png" alt="" />
			<br/>
			<img src="<?php bloginfo('template_url'); ?>/img/testimonials-2.png" alt="" />
		</div>
	</div>
</aside>
