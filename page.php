<?php get_header(); ?>

<!--MAIN-->
<div class="site_main site_tpl-page">
	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<?php get_template_part('loop'); ?>
			</div>
			<div class="col-md-4">
				<?php get_sidebar(); ?>
			</div>
		</div>
	</div>
</div>

<?php get_footer(); ?>
