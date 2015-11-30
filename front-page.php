<?php get_header(); ?>

<?php get_template_part('slider'); ?>

<!--MAIN-->
<div class="main tpl-front-page">
	<div class="container">
		<?php get_template_part('loop'); ?>
	</div>
</div>

<?php get_footer(); ?>