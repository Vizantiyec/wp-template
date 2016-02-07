<?php if ( have_posts() ) : ?>
	<?php while ( have_posts() ) : the_post(); ?>
		<article id="post-<?php the_ID(); ?>" <?php post_class('site_article'); ?>>

			<?php if(!is_singular()) : // for not singular pages ?>
				<h2 class="site_article-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				<div class="site_article-text text-justify">
					<?php the_excerpt(); ?>
				</div>

			<?php else : // for singular pages ?>

				<?php if (!is_page()) : // but not for page.php ?>
					<h1 class="site_article-title"><?php the_title(); ?></h1>
				<?php endif; ?>

				<div class="site_article-text text-justify">
					<?php the_content(); ?>
				</div>

				<div class="site_after-article-block text-center">
					<div class="site_steps-block hidden-xs">
						<img src="<?php bloginfo('template_url'); ?>/img/steps.png" alt="">
					</div>
					<div class="site_btn-wrap">
						<a href="javascript:void(0);" onclick="document.location.href='/order'" class="btn btn-default site_big-btn">Order</a>
					</div>
					<div class="site_guarantees-block hidden-xs">
						<img src="<?php bloginfo('template_url'); ?>/img/guarantees.png" alt="">
					</div>
				</div>
			<?php endif; ?>
		</article>
	<?php endwhile; ?>
<?php endif; ?>
